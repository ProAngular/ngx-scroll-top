import { Component } from '@angular/core';

@Component({
  selector: 'ngx-app',
  template: `
    <header></header>
    <section>
      <p *ngFor="let number of Array(88)">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimssy
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip expir
        ea commodo consequat. Duis aute irure dolor in reprehenderit in esselpa
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteury
        sint occaecat cupidatat non proident, sunt in culpa qui officia luretzo
        deserunt mollit anim id est laborum.
      </p>
    </section>
    <footer #footer></footer>
    <ngx-scroll-top
      backgroundColor="#000"
      [bottomOffset]="footer.offsetHeight"
    ></ngx-scroll-top>
  `,
  styles: [
    `
      header {
        background-color: #1775d1;
        height: 80px;
      }
      section {
        padding: 1rem;
      }
      footer {
        background-color: #1775d1;
        height: 420px;
      }
    `,
  ],
})
export class AppComponent {
  public readonly Array = Array;
}
