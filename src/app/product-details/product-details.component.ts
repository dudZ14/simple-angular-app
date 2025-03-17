import { Component, Input } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input()
  product: ProductRepresentation = {};
}
