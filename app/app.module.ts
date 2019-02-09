import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import HttpModule so that, the service will be able to make http calls
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SimpleComponent } from "./simplecomponent/app.simple.component";
import { ProductComponent } from "./productcomponent/app.product.component";
// import the service. Register this service in Providers og NgModule
import { ProductService } from "./../services/app.product.service";
@NgModule({
  declarations: [AppComponent, SimpleComponent, ProductComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [ProductService],
  bootstrap: [ProductComponent]
})
export class AppModule {}
