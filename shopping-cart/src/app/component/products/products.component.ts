import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private productList: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProduct()
    .subscribe(res=> {
      this.productList = res
    })
  }

  filter(val){

  }

}
