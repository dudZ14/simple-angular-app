import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductDetailsComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products: ProductRepresentation[] = [];

   constructor(private service:ProductService){
  } 
  
 ngOnInit(): void {

    this.service.getAllProductsWithLimit().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },

      error: (error:HttpErrorResponse) => {
        console.log(error);
      }
    });
  } 
}
