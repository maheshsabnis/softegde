// 1. make the service Injectable
import { Injectable } from "@angular/core";
// 2. Importing Http
import { Http, Response, Headers, RequestOptions } from "@angular/http";
// the Http --> making http request get/post/put/delete
// the methods are get(), post(), put() and delete(), all these methods
// return Observable<Response> object
// the Response --> Receiving response from server
// the Headers --> Request Headers, Content-Type, AUTHORIZATION, etc.
// the RequestOptions --> Carry header information to server
// 3. import Observable object
import { Observable } from "rxjs";
import { Product } from "./../models/app.models";
@Injectable()
export class ProductService {
  url: string;
  // inject Http into the ctor of service
  constructor(private http: Http) {
    this.url = "http://apiapptrainingservice.azurewebsites.net/api/Products";
  }
  getData(): Observable<Response> {
    let resp: Observable<Response> = null;
    resp = this.http.get(this.url);
    return resp;
  }

  postData(prd: Product): Observable<Response> {
    let resp: Observable<Response> = null;
    // creating header options
    const headers: Headers = new Headers({
      "Content-Type": "application/json"
    });
    // defining request options
    const options: RequestOptions = new RequestOptions();
    options.headers = headers;
    resp = this.http.post(this.url, JSON.stringify(prd), options);
    return resp;
  }
}
