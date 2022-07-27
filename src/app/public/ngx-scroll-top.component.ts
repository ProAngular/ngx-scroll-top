import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, HostListener, Input } from '@angular/core';

const w = window;

@Component({
  selector: 'ngx-scroll-top',
  template: `
    <button *ngIf="!isHidden" (click)="scrollTop()" [@easeInOutAnimation]>
      Up
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
        right: 2rem;
        width: 25px;
        transition: all 0.1s ease-in-out;
        z-index: 9999;
      }
    `,
  ],
})
export class NgxScrollTopComponent {
  private readonly styleBottomDefault = '32px';
  public isHidden = true;

  /**
   * Offset button from bottom of page dynamically by setting this value.
   */
  @Input() public bottomOffset: string | number = '0px';
  @Input() public displayAtYPosition: string | number = '420px';

  @HostBinding('style.bottom') public styleBottom = this.styleBottomDefault;
  @HostBinding('style.height') public styleHeight = '25px';
  @HostListener('window:scroll', []) public onWindowScroll(): void {
    this.updateIsHidden();
    this.updatePosition();
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
      // Use the default position.
      this.styleBottom = this.styleBottomDefault;
    };

    if (this.isHidden) {
      useDefaultPosition();
      return;
    }

    try {
      const { document, scrollY } = w;
      const { documentElement: docEl } = document;
      const bottomY = docEl.scrollHeight - docEl.clientHeight;
      const bottomOffset = parseInt(this.bottomOffset.toString(), 10);
      const distanceFromBottom = bottomY - scrollY;
      const height = parseInt(this.styleHeight, 10);

      if (distanceFromBottom + (height - height / 2) < bottomOffset) {
        // Scroll up button exceeded bottom offset, update position.
        this.styleBottom = `${bottomOffset - distanceFromBottom + height}px`;
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
    if (this.isHidden && scrollY > this.displayAtYPosition) {
      this.isHidden = false;
    } else if (!this.isHidden && scrollY <= this.displayAtYPosition) {
      this.isHidden = true;
    }
  }
}
