import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { NgxScrollTopModule } from 'src/app/public/ngx-scroll-top.module';
import { BodyComponent, FooterComponent, HeaderComponent } from './layout';

@NgModule({
  declarations: [AppComponent, BodyComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, NgxScrollTopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
