import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxScrollTopComponent } from './ngx-scroll-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgxScrollTopComponent],
  imports: [BrowserAnimationsModule, CommonModule],
  exports: [NgxScrollTopComponent],
  providers: [],
})
export class NgxScrollTopModule {}
