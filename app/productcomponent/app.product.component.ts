import { Component } from "@angular/core";
import { Response } from "@angular/http";
import { Product } from "./../../models/app.models";
import { ProductService } from "./../../services/app.product.service";
@Component({
  selector: "app-product-component",
  template: `
    <input type="button" value="Get Data" (click)="getProducts()" />
    <br />
    <input type="button" value="Post Data" (click)="saveProduct()" />
    <hr />
    <div>{{ data }}</div>
  `
})
export class ProductComponent {
  product: Product;
  data: string;
  constructor(private serv: ProductService) {}

  // to call the service and receive data
  // subscribe to the Observable<Response>
  getProducts(): void {
    this.serv.getData().subscribe(
      (resp: Response) => {
        this.data = JSON.stringify(resp.json());
      },
      (error: any) => {
        this.data = `Error Occured ${error.status}`;
      }
    );
  }
  saveProduct(): void {
    this.product = new Product(
      "Prd-1007",
      "Prd1007",
      "Electronics",
      "ABC",
      "Some Product",
      111111
    );
    this.serv.postData(this.product).subscribe(
      (resp: Response) => {
        this.data = JSON.stringify(resp.json());
      },
      (error: any) => {
        this.data = `Error Occured ${error.status}`;
      }
    );
  }
}
