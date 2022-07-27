import { trigger, transition, style, animate } from '@angular/animations';
import * as i0 from '@angular/core';
import { Component, Input, HostBinding, HostListener, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

const w = window;
class NgxScrollTopComponent {
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

class NgxScrollTopModule {
}
NgxScrollTopModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NgxScrollTopModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxScrollTopModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.0", ngImport: i0, type: NgxScrollTopModule, declarations: [NgxScrollTopComponent], imports: [CommonModule], exports: [NgxScrollTopComponent] });
NgxScrollTopModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NgxScrollTopModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NgxScrollTopModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxScrollTopComponent],
                    imports: [CommonModule],
                    exports: [NgxScrollTopComponent],
                    providers: [],
                }]
        }] });

/** Public API Exports for Node Package */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxScrollTopComponent, NgxScrollTopModule };
//# sourceMappingURL=proangular-ngx-scroll-top.mjs.map
