import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'ngx-scroll-top',
  templateUrl: './ngx-scroll-top.component.html',
  styleUrl: './ngx-scroll-top.component.scss',
  imports: [],
  standalone: true,
})
export class NgxScrollTopComponent implements OnInit {
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
  @Input() @HostBinding('style.color') public fontColor = '#FFFFFF';

  /**
   * The font size for the nested content within the back to top button.
   *
   * Default: `'16px'`
   *
   * Example: `'2rem'` or `'32px'`
   *
   * Tip: Define any `'x'` css property available for `'font-size: x'`
   */
  @Input() @HostBinding('style.font-size') public fontSize = '16px';

  /**
   * Height of back to top button in string px format.
   *
   * Default: `'25px'`
   */
  @Input() @HostBinding('style.height') public height = '40px';

  /**
   * Position on-screen where the back to top button is displayed.
   *
   * Default: `'right'`
   */
  public readonly position = input<'left' | 'right'>('right');

  /**
   * Width of back to top button in string px format.
   *
   * Default: `'25px'`
   */
  @Input() @HostBinding('style.width') public width = '40px';

  /**
   * Style the `z-index` for the back to top button as needed for correct layer
   * height adjustment. This can be useful when working with sticky headers.
   *
   * Default: `999`
   */
  @Input() @HostBinding('style.z-index') public zIndex = 999;

  /**
   * Whether button should be rendered in DOM.
   * It stays true during fade-in/fade-out, so animation runs.
   */
  protected shouldRenderButton = signal(false);

  /**
   * State of button animation: "idle", "fading-in", "fading-out".
   */
  protected fadeState = signal<'idle' | 'fading-in' | 'fading-out'>('idle');

  /** Default padding from screen edges. */
  private readonly defaultPadding = '16px';

  /** Duration for fade-in/fade-out animations. */
  private readonly fadeDuration = 200;

  /** Timeout reference for fade completion. */
  private fadeTimeout?: ReturnType<typeof setTimeout>;

  private animationFrameId?: number;

  @HostBinding('style.bottom') protected styleBottom = this.defaultPadding;
  @HostBinding('style.left') protected styleLeft = 'unset';
  @HostBinding('style.right') protected styleRight = this.defaultPadding;

  /** Scroll event listener */
  @HostListener('window:scroll', [])
  protected onWindowScroll(): void {
    this.updateButtonVisibility();
    this.updatePosition();
  }

  public ngOnInit(): void {
    switch (this.position()) {
      case 'left':
        this.styleRight = 'unset';
        this.styleLeft = this.defaultPadding;
        break;
      case 'right':
      default:
        this.styleRight = this.defaultPadding;
        this.styleLeft = 'unset';
        break;
    }
    this.updateButtonVisibility();
    this.updatePosition();
  }

  /** Scroll smoothly to the top of the window. */
  public scrollTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /** Dynamically update the button position based on scroll and offsets. */
  private updatePosition(): void {
    const useDefaultPosition = (): void => {
      this.styleBottom = this.defaultPadding;
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
      const halfHeight = parsePxStringToInt(this.height) / 2;
      const defaultPadding = parsePxStringToInt(this.defaultPadding);

      if (distanceFromBottom + (halfHeight - defaultPadding) < bottomOffset) {
        // Scroll up button exceeded bottom offset, update position.
        this.styleBottom = `${
          bottomOffset - distanceFromBottom + defaultPadding
        }px`;
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
      this.shouldRenderButton.set(true);
      this.fadeState.set('idle');
      if (this.fadeTimeout) clearTimeout(this.fadeTimeout);

      // Cancel previous frame if exists
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }

      // Schedule fade-in with animation frame
      this.animationFrameId = requestAnimationFrame(() => {
        this.fadeState.set('fading-in');
        this.animationFrameId = undefined;
      });
    }
    // Fade out
    else if (this.shouldRenderButton() && scrollY <= displayAtYPosition) {
      this.fadeState.set('fading-out');
      if (this.fadeTimeout) clearTimeout(this.fadeTimeout);
      this.fadeTimeout = setTimeout(() => {
        this.shouldRenderButton.set(false);
        this.fadeState.set('idle');
      }, this.fadeDuration);
    }
  }
}

/**
 * Convert a px string or number into a number, handles conversion safely.
 *
 * @param value - string/number that could be '40px', '16', 32, etc.
 * @returns parsed integer value.
 */
function parsePxStringToInt(value: string | number): number {
  try {
    return parseInt(value.toString(), 10);
  } catch (error: unknown) {
    throw new Error(
      `Failed to parse value "${value}" with error: ${String(error)}`,
    );
  }
}
