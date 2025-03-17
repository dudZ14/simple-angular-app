import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent /*implements OnInit*/{

  /*
  parameter:any;
  queryParam:any;

   ngOnInit(): void {
    console.log(this.activatedRoute);
    //http://localhost:4200/about/ali  , parameter = ali
    this.parameter = this.activatedRoute.snapshot.params["username"]; // necesario colocar no routes paths
    //http://localhost:4200/about/ali?lastname=jose&course=pt  , parameter = ali e queryParam=pt
    this.queryParam = this.activatedRoute.snapshot.queryParams["course"]; // n é preciso colocar no routes paths
  }
 */

}
