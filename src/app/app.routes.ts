import { Routes } from '@angular/router';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';

export const routes: Routes = [
    {path: "home", component:  MyFirstComponentComponent},
    {path: "about", component: AboutComponent},
    {path: "about/:username", component: AboutComponent},
    {path: "products", component:ProductsComponent},
    {path: "create", component:NewProductComponent},

];
