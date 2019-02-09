import { Component } from "@angular/core";

// by applying @Component decorator on SimpleComponent class
// it is now ready to be used as Angular-Component
@Component({
  selector: "app-simple-component",
  template: `
    <h1>Welcome to Angular!!!!!</h1>
    <h2>I am Simple Component Created by {{ name }}</h2>
    <br />
    <input type="text" [value]="name" />
    <br />
    <input type="text" [value]="name" />
    <br />
    <input type="button" value="Click Me" (click)="display()" />
    <a [href]="url">DEVC</a>
    <hr />
    <input type="text" [(ngModel)]="name" />
    <br />
    <input type="text" [(ngModel)]="name" />
    <br />
    <div>Full Name is {{ fullname }}</div>
  `
})
export class SimpleComponent {
  // variable declaration. By default these are public
  name: string;
  url: string;
  fullname: string;
  constructor() {
    this.name = "Mahesh Sabnis";
    this.url = "http://www.devcurry.com";
    this.fullname = this.name;
  }
  display(): void {
    this.name = "Tejas Mahesh Sabnis";
  }
}
