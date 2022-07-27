import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const w = window;
export class NgxScrollTopComponent {
    constructor() {
        this.styleBottomDefault = '32px';
        this.isHidden = true;
        /**
         * Offset button from bottom of page dynamically by setting this value.
         */
        this.bottomOffset = '0px';
        this.displayAtYPosition = '420px';
        this.styleBottom = this.styleBottomDefault;
        this.styleHeight = '25px';
    }
    onWindowScroll() {
        this.updateIsHidden();
        this.updatePosition();
    }
    scrollTop() {
        w.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    updatePosition() {
        const useDefaultPosition = () => {
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
            }
            else {
                useDefaultPosition();
            }
        }
        catch (error) {
            console.warn('Failed to update back to top button position dynamically.', error);
            useDefaultPosition();
        }
    }
    updateIsHidden() {
        const { scrollY } = w;
        if (this.isHidden && scrollY > this.displayAtYPosition) {
            this.isHidden = false;
        }
        else if (!this.isHidden && scrollY <= this.displayAtYPosition) {
            this.isHidden = true;
        }
    }
}
NgxScrollTopComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NgxScrollTopComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxScrollTopComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.0", type: NgxScrollTopComponent, selector: "ngx-scroll-top", inputs: { bottomOffset: "bottomOffset", displayAtYPosition: "displayAtYPosition" }, host: { listeners: { "window:scroll": "onWindowScroll()" }, properties: { "style.bottom": "this.styleBottom", "style.height": "this.styleHeight" } }, ngImport: i0, template: `
    <button *ngIf="!isHidden" (click)="scrollTop()" [@easeInOutAnimation]>
      Up
    </button>
  `, isInline: true, styles: [":host{position:fixed;right:2rem;width:25px;transition:all .1s ease-in-out;z-index:9999}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], animations: [
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
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NgxScrollTopComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-scroll-top', template: `
    <button *ngIf="!isHidden" (click)="scrollTop()" [@easeInOutAnimation]>
      Up
    </button>
  `, animations: [
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
                    ], styles: [":host{position:fixed;right:2rem;width:25px;transition:all .1s ease-in-out;z-index:9999}\n"] }]
        }], propDecorators: { bottomOffset: [{
                type: Input
            }], displayAtYPosition: [{
                type: Input
            }], styleBottom: [{
                type: HostBinding,
                args: ['style.bottom']
            }], styleHeight: [{
                type: HostBinding,
                args: ['style.height']
            }], onWindowScroll: [{
                type: HostListener,
                args: ['window:scroll', []]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNjcm9sbC10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9wdWJsaWMvbmd4LXNjcm9sbC10b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFNUUsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBaUNqQixNQUFNLE9BQU8scUJBQXFCO0lBL0JsQztRQWdDbUIsdUJBQWtCLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFdkI7O1dBRUc7UUFDYSxpQkFBWSxHQUFvQixLQUFLLENBQUM7UUFDdEMsdUJBQWtCLEdBQW9CLE9BQU8sQ0FBQztRQUUxQixnQkFBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLE1BQU0sQ0FBQztLQXdEMUQ7SUF2RDJDLGNBQWM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sU0FBUztRQUNkLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGNBQWM7UUFDcEIsTUFBTSxrQkFBa0IsR0FBRyxHQUFTLEVBQUU7WUFDcEMsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQzdDLENBQUMsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUk7WUFDRixNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoQyxNQUFNLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUM1QyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEUsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQzdDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTlDLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksRUFBRTtnQkFDN0QsNERBQTREO2dCQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsWUFBWSxHQUFHLGtCQUFrQixHQUFHLE1BQU0sSUFBSSxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNMLGtCQUFrQixFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUFDLE9BQU8sS0FBYyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsMkRBQTJELEVBQzNELEtBQUssQ0FDTixDQUFDO1lBQ0Ysa0JBQWtCLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFTyxjQUFjO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7a0hBbEVVLHFCQUFxQjtzR0FBckIscUJBQXFCLGdTQTdCdEI7Ozs7R0FJVCx5UEFDVztRQUNWLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTtZQUM1QixVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDeEMsQ0FBQztZQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN4QyxDQUFDO1NBQ0gsQ0FBQztLQUNIOzJGQWFVLHFCQUFxQjtrQkEvQmpDLFNBQVM7K0JBQ0UsZ0JBQWdCLFlBQ2hCOzs7O0dBSVQsY0FDVzt3QkFDVixPQUFPLENBQUMsb0JBQW9CLEVBQUU7NEJBQzVCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDeEMsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ3hDLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDs4QkFvQmUsWUFBWTtzQkFBM0IsS0FBSztnQkFDVSxrQkFBa0I7c0JBQWpDLEtBQUs7Z0JBRThCLFdBQVc7c0JBQTlDLFdBQVc7dUJBQUMsY0FBYztnQkFDUyxXQUFXO3NCQUE5QyxXQUFXO3VCQUFDLGNBQWM7Z0JBQ2UsY0FBYztzQkFBdkQsWUFBWTt1QkFBQyxlQUFlLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IHcgPSB3aW5kb3c7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zY3JvbGwtdG9wJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWlzSGlkZGVuXCIgKGNsaWNrKT1cInNjcm9sbFRvcCgpXCIgW0BlYXNlSW5PdXRBbmltYXRpb25dPlxuICAgICAgVXBcbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2Vhc2VJbk91dEFuaW1hdGlvbicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICBhbmltYXRlKCcyMDBtcycsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCcyMDBtcycsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4U2Nyb2xsVG9wQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzdHlsZUJvdHRvbURlZmF1bHQgPSAnMzJweCc7XG4gIHB1YmxpYyBpc0hpZGRlbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE9mZnNldCBidXR0b24gZnJvbSBib3R0b20gb2YgcGFnZSBkeW5hbWljYWxseSBieSBzZXR0aW5nIHRoaXMgdmFsdWUuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgYm90dG9tT2Zmc2V0OiBzdHJpbmcgfCBudW1iZXIgPSAnMHB4JztcbiAgQElucHV0KCkgcHVibGljIGRpc3BsYXlBdFlQb3NpdGlvbjogc3RyaW5nIHwgbnVtYmVyID0gJzQyMHB4JztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJvdHRvbScpIHB1YmxpYyBzdHlsZUJvdHRvbSA9IHRoaXMuc3R5bGVCb3R0b21EZWZhdWx0O1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIHB1YmxpYyBzdHlsZUhlaWdodCA9ICcyNXB4JztcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFtdKSBwdWJsaWMgb25XaW5kb3dTY3JvbGwoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVJc0hpZGRlbigpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb3AoKTogdm9pZCB7XG4gICAgdy5zY3JvbGwoe1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgdXNlRGVmYXVsdFBvc2l0aW9uID0gKCk6IHZvaWQgPT4ge1xuICAgICAgLy8gVXNlIHRoZSBkZWZhdWx0IHBvc2l0aW9uLlxuICAgICAgdGhpcy5zdHlsZUJvdHRvbSA9IHRoaXMuc3R5bGVCb3R0b21EZWZhdWx0O1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0hpZGRlbikge1xuICAgICAgdXNlRGVmYXVsdFBvc2l0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZG9jdW1lbnQsIHNjcm9sbFkgfSA9IHc7XG4gICAgICBjb25zdCB7IGRvY3VtZW50RWxlbWVudDogZG9jRWwgfSA9IGRvY3VtZW50O1xuICAgICAgY29uc3QgYm90dG9tWSA9IGRvY0VsLnNjcm9sbEhlaWdodCAtIGRvY0VsLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IGJvdHRvbU9mZnNldCA9IHBhcnNlSW50KHRoaXMuYm90dG9tT2Zmc2V0LnRvU3RyaW5nKCksIDEwKTtcbiAgICAgIGNvbnN0IGRpc3RhbmNlRnJvbUJvdHRvbSA9IGJvdHRvbVkgLSBzY3JvbGxZO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5zdHlsZUhlaWdodCwgMTApO1xuXG4gICAgICBpZiAoZGlzdGFuY2VGcm9tQm90dG9tICsgKGhlaWdodCAtIGhlaWdodCAvIDIpIDwgYm90dG9tT2Zmc2V0KSB7XG4gICAgICAgIC8vIFNjcm9sbCB1cCBidXR0b24gZXhjZWVkZWQgYm90dG9tIG9mZnNldCwgdXBkYXRlIHBvc2l0aW9uLlxuICAgICAgICB0aGlzLnN0eWxlQm90dG9tID0gYCR7Ym90dG9tT2Zmc2V0IC0gZGlzdGFuY2VGcm9tQm90dG9tICsgaGVpZ2h0fXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVzZURlZmF1bHRQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdGYWlsZWQgdG8gdXBkYXRlIGJhY2sgdG8gdG9wIGJ1dHRvbiBwb3NpdGlvbiBkeW5hbWljYWxseS4nLFxuICAgICAgICBlcnJvcixcbiAgICAgICk7XG4gICAgICB1c2VEZWZhdWx0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUlzSGlkZGVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2Nyb2xsWSB9ID0gdztcbiAgICBpZiAodGhpcy5pc0hpZGRlbiAmJiBzY3JvbGxZID4gdGhpcy5kaXNwbGF5QXRZUG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzSGlkZGVuICYmIHNjcm9sbFkgPD0gdGhpcy5kaXNwbGF5QXRZUG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaXNIaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19