import { Component } from '@angular/core';

@Component({
  selector: 'ngx-app',
  template: `
    <ngx-header></ngx-header>
    <ngx-body>
      <h2 align="center">@proangular/ngx-scroll-top</h2>
      <h3 align="center">Scroll down to demo</h3>
    </ngx-body>
    <ngx-footer #footer></ngx-footer>
    <!-- EXAMPLE -->
    <ngx-scroll-top></ngx-scroll-top>
    <!-- EXAMPLE WITH OPTIONAL INPUTS -->
    <ngx-scroll-top
      backgroundColor="#0D58C0"
      [bottomOffset]="footer.height"
      [displayAtYPosition]="1000"
      fontColor="#FFFAFA"
      fontSize="2rem"
      height="3rem"
      position="left"
      [zIndex]="1"
      width="3rem"
      >&#8686;</ngx-scroll-top
    >
  `,
})
export class AppComponent {}
