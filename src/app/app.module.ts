import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { NgxScrollTopModule } from 'src/app/public/ngx-scroll-top.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxScrollTopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
