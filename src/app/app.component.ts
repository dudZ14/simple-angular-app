import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MenuComponent } from "./menu/menu.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-crash-course';
}
