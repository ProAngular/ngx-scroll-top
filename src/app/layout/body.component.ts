import { Component } from '@angular/core';

@Component({
  selector: 'ngx-body',
  template: `
    <section>
      <ng-content></ng-content>
    </section>
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
  `,
  styles: [
    `
      section {
        padding: 1rem;
      }
    `,
  ],
})
export class BodyComponent {
  public readonly Array = Array;
}
