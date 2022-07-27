import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ngx-scroll-top',
  template: `
    <button
      *ngIf="!isHidden"
      (click)="scrollTop()"
      [style.background-color]="backgroundColor"
      [@easeInOutAnimation]
    >
      <div #content>
        <ng-content></ng-content>
      </div>
      <svg
        *ngIf="!content?.innerHTML?.length"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <desc>
          https://fonts.gstatic.com/s/i/materialicons/expand_less/v12/24px.svg
        </desc>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
      </svg>
    </button>
  `,
  animations: [
    trigger('easeInOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
  styles: [
    `
      :host {
        position: fixed;
        transition: all 0.1s ease-in-out;
      }
      button {
        display: inline-block;
        position: relative;
        transition: all 0.1s ease-in-out;
        color: white;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
          0px 6px 10px 0px rgba(0, 0, 0, 0.14),
          0px 1px 18px 0px rgba(0, 0, 0, 0.12);
        user-select: none;
        cursor: pointer;
        outline: none;
        border: none;
        box-sizing: border-box;
        white-space: nowrap;
        text-decoration: none;
        vertical-align: baseline;
        text-align: center;
        margin: 0;
        /** line-height: 36px; */
        border-radius: 50%;
        padding: 0;
        flex-shrink: 0;
      }
      button,
      button > svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class NgxScrollTopComponent implements OnInit {
  /**
   * Background color of the back to top button (hex string).
   *
   * Default: `#1775d1` (blue)
   */
  @Input() public backgroundColor = '#1775d1';
  /**
   * Offset `px` from bottom of page when scrolled to bottom. For example this
   * can be used to make sure the back to top button never overlaps a footer.
   *
   * Default: `0px`
   *
   * Example: `250px` or `250` because my footer is 250px in height
   */
  @Input() public bottomOffset: string | number = '0px';
  /**
   * The back to top button will not be displayed until the user scrolls to the
   * provided Y (vertical `px`) coordinate on the page.
   *
   * Default: `420px`
   *
   * Example: `100px` or `100`
   */
  @Input() public displayAtYPosition: string | number = '420px';
  /**
   * Position on-screen where the back to top button is displayed.
   *
   * Default: `right`
   */
  @Input() public position: 'left' | 'right' = 'right';
  /**
   * Height of back to top button in string px format.
   *
   * Default: `25px`
   */
  @Input() @HostBinding('style.height') public styleHeight = '40px';
  /**
   * Width of back to top button in string px format.
   *
   * Default: `25px`
   */
  @Input() @HostBinding('style.width') public styleWidth = '40px';
  /**
   * Style the `z-index` for the back to top button as needed for correct layer
   * height adjustment. This can be useful when working with sticky headers.
   *
   * Default: `999`
   */
  @Input() @HostBinding('style.z-index') public styleZIndex = 999;

  public isHidden = true;
  private readonly defaultPadding = '16px';

  @HostBinding('style.bottom') public styleBottom = this.defaultPadding;
  @HostBinding('style.left') public styleLeft = 'unset';
  @HostBinding('style.right') public styleRight = this.defaultPadding;
  @HostListener('window:scroll', []) public onWindowScroll(): void {
    this.updateIsHidden();
    this.updatePosition();
  }

  public ngOnInit(): void {
    switch (this.position) {
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
  }

  public scrollTop(): void {
    w.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  private updatePosition(): void {
    const useDefaultPosition = (): void => {
      this.styleBottom = this.defaultPadding;
    };

    if (this.isHidden) {
      useDefaultPosition();
      return;
    }

    try {
      const { document, scrollY } = w;
      const { documentElement: docEl } = document;
      const bottomY = docEl.scrollHeight - docEl.clientHeight;
      const bottomOffset = parsePxStringToInt(this.bottomOffset);
      const distanceFromBottom = bottomY - scrollY;
      const halfHeight = parsePxStringToInt(this.styleHeight) / 2;
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

  private updateIsHidden(): void {
    const { scrollY } = w;
    const displayAtYPosition = parsePxStringToInt(this.displayAtYPosition);

    if (this.isHidden && scrollY > displayAtYPosition) {
      this.isHidden = false;
    } else if (!this.isHidden && scrollY <= displayAtYPosition) {
      this.isHidden = true;
    }
  }
}

const w = window;

function parsePxStringToInt(value: string | number): number {
  try {
    return parseInt(value.toString(), 10);
  } catch (error: unknown) {
    throw new Error(
      `Failed to parse value "${value}" with error: ${String(error)}`,
    );
  }
}
