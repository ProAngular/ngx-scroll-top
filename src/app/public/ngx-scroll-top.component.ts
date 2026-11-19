import {
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

const animationMs = 200;

/** Default padding from screen edges. */
const defaultPadding = '16px';

@Component({
  selector: 'ngx-scroll-top',
  templateUrl: './ngx-scroll-top.component.html',
  styleUrl: './ngx-scroll-top.component.scss',
  styles: [
    `
      .fade-in {
        animation: fadeIn ${animationMs}ms ease-in forwards;
      }
      .fade-out {
        animation: fadeOut ${animationMs}ms ease-out forwards;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `,
  ],
  imports: [],
  host: {
    '[style.bottom]': 'styleBottom()',
    '[style.color]': 'fontColor()',
    '[style.font-size]': 'fontSize()',
    '[style.height]': 'height()',
    '[style.left]': 'styleLeft()',
    '[style.right]': 'styleRight()',
    '[style.width]': 'width()',
    '[style.z-index]': 'zIndex()',
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class NgxScrollTopComponent {
  public constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.isDestroyed = true;
      if (this.fadeTimeout) {
        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = undefined;
      }
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = undefined;
      }
    });

    afterNextRender(() => {
      this.updateButtonVisibility();
      this.updatePosition();
    });
  }

  /**
   * Background color of the back to top button (hex string).
   *
   * Default: `'#0D58C0'` (dark-blue)
   *
   * Example: `'#000'` or `'black'`
   *
   * Tip: Define any `'x'` css property available for `'background-color: x'`
   */
  public readonly backgroundColor = input('#0D58C0');

  /**
   * Offset `px` from bottom of page when scrolled to bottom. For example this
   * can be used to make sure the back to top button never overlaps a footer.
   *
   * Default: `'0px'`
   *
   * Example: `'250px'` or `250` because my footer is 250px in height
   */
  public readonly bottomOffset = input<string | number>('0px');

  /**
   * The back to top button will not be displayed until the user scrolls to the
   * provided Y (vertical `px`) coordinate on the page.
   *
   * Default: `'420px'`
   *
   * Example: `'100px'` or `100`
   */
  public readonly displayAtYPosition = input<string | number>('420px');

  /**
   * The font color for the nested content within the back to top button.
   *
   * Default: `'#FFFFFF'` (white)
   *
   * Example: `'#000'` or `'black'`
   *
   * Tip: Define any `'x'` css property available for `'color: x'`
   */
  public readonly fontColor = input('#FFFFFF');

  /**
   * The font size for the nested content within the back to top button.
   *
   * Default: `'16px'`
   *
   * Example: `'2rem'` or `'32px'`
   *
   * Tip: Define any `'x'` css property available for `'font-size: x'`
   */
  public readonly fontSize = input('16px');

  /**
   * Height of back to top button in string format.
   *
   * @example `'32px'` or `'2rem'`
   */
  public readonly height = input('40px');

  /**
   * Position on-screen where the back to top button is displayed.
   *
   * Default: `'right'`
   */
  public readonly position = input<'left' | 'right'>('right');

  /**
   * Width of back to top button in string format.
   *
   * @example `'32px'` or `'2rem'`
   */
  public readonly width = input('40px');

  /**
   * Style the `z-index` for the back to top button as needed for correct layer
   * height adjustment. This can be useful when working with sticky headers.
   *
   * Default: `999`
   */
  public readonly zIndex = input(999);

  /**
   * Whether button should be rendered in DOM.
   * It stays true during fade-in/fade-out, so animation runs.
   */
  protected readonly shouldRenderButton = signal(false);

  /**
   * State of button animation: "idle", "fading-in", "fading-out".
   */
  protected readonly fadeState = signal<'idle' | 'fading-in' | 'fading-out'>(
    'idle',
  );

  protected readonly isButtonNotRendered = signal(true);

  protected readonly styleBottom = signal(defaultPadding);

  protected readonly styleLeft = computed(() =>
    this.position() === 'left' ? defaultPadding : 'unset',
  );

  protected readonly styleRight = computed(() =>
    this.position() === 'left' ? 'unset' : defaultPadding,
  );

  /** Timeout reference for fade completion. */
  private fadeTimeout?: ReturnType<typeof setTimeout>;

  private isDestroyed = false;

  private animationFrameId?: number;

  /** Scroll smoothly to the top of the window. */
  public scrollTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /** Window scroll event listener, bound through `host`. */
  protected onWindowScroll(): void {
    this.updateButtonVisibility();
    this.updatePosition();
  }

  /** Dynamically update the button position based on scroll and offsets. */
  private updatePosition(): void {
    const useDefaultPosition = (): void => {
      this.styleBottom.set(defaultPadding);
    };

    if (!this.shouldRenderButton()) {
      useDefaultPosition();
      return;
    }

    try {
      const { document, scrollY } = window;
      const { documentElement: docEl } = document;
      const bottomY = docEl.scrollHeight - docEl.clientHeight;
      const bottomOffset = parsePxStringToInt(this.bottomOffset());
      const distanceFromBottom = bottomY - scrollY;
      const halfHeight = parsePxStringToInt(this.height()) / 2;
      const padding = parsePxStringToInt(defaultPadding);

      if (distanceFromBottom + (halfHeight - padding) < bottomOffset) {
        // Scroll up button exceeded bottom offset, update position.
        this.styleBottom.set(
          `${bottomOffset - distanceFromBottom + padding}px`,
        );
      } else {
        useDefaultPosition();
      }
    } catch (error: unknown) {
      console.warn(
        'Failed to update back to top button position dynamically.',
        error,
      );
      useDefaultPosition();
    }
  }

  /**
   * Controls when to show/hide the button and triggers CSS animation.
   * This version guarantees fade-in/fade-out animation runs using signals.
   */
  private updateButtonVisibility(): void {
    const { scrollY } = window;
    const displayAtYPosition = parsePxStringToInt(this.displayAtYPosition());

    // Fade in
    if (!this.shouldRenderButton() && scrollY > displayAtYPosition) {
      // Cancel any pending fade-out
      if (this.fadeTimeout) {
        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = undefined;
      }
      this.fadeState.set('idle'); // Reset fade state
      this.shouldRenderButton.set(true);

      // Cancel previous animation frame if exists
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }

      // Schedule and track new animation frame
      const animationFrameId = requestAnimationFrame(() => {
        if (this.isDestroyed) return;
        this.fadeState.set('fading-in');
        this.isButtonNotRendered.set(false);
        this.animationFrameId = undefined;
      });

      this.animationFrameId = animationFrameId;
    }

    // Fade out
    else if (this.shouldRenderButton() && scrollY <= displayAtYPosition) {
      this.fadeState.set('fading-out');
      if (this.fadeTimeout) clearTimeout(this.fadeTimeout);
      this.fadeTimeout = setTimeout(() => {
        if (this.isDestroyed) return;
        this.shouldRenderButton.set(false);
        this.fadeState.set('idle');
      }, animationMs);
    }
  }
}

/**
 * Convert a px string or number into a number.
 *
 * @param value - string/number that could be '40px', '16', 32, etc.
 * @returns parsed integer value.
 */
function parsePxStringToInt(value: string | number): number {
  return parseInt(value.toString(), 10);
}
