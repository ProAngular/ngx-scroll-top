import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BodyComponent, FooterComponent, HeaderComponent } from './layout';
import { NgxScrollTopComponent } from './public/ngx-scroll-top.component';

@Component({
  selector: 'ngx-root',
  imports: [
    BodyComponent,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    NgxScrollTopComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly Array = Array;
}
