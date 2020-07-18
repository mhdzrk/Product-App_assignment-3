import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductlistService } from './productlist.service';
import { AuthGuard} from './auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    NewProductComponent,
    UpdateproductComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductlistService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
