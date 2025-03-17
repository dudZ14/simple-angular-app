import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router:Router){
    
  }
  
  navigateToProducts() {
    this.router.navigate(["products"]);
  }
  navigateToNewProduct() {
    this.router.navigate(["create"]);
  }
  
  navigateToHome() {
    this.router.navigate(["home"]);
  }

  navigateToAbout() {
    this.router.navigate(["about"]);
  }

}
