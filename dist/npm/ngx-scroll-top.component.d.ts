import * as i0 from "@angular/core";
export declare class NgxScrollTopComponent {
    private readonly styleBottomDefault;
    isHidden: boolean;
    /**
     * Offset button from bottom of page dynamically by setting this value.
     */
    bottomOffset: string | number;
    displayAtYPosition: string | number;
    styleBottom: string;
    styleHeight: string;
    onWindowScroll(): void;
    scrollTop(): void;
    private updatePosition;
    private updateIsHidden;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxScrollTopComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxScrollTopComponent, "ngx-scroll-top", never, { "bottomOffset": "bottomOffset"; "displayAtYPosition": "displayAtYPosition"; }, {}, never, never, false>;
}
