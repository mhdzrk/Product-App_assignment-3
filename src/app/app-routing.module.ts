import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{path:'',component:ProductListComponent},
{path:'add',component:NewProductComponent,canActivate:[AuthGuard]},
{path:'edit/:id',component:UpdateproductComponent,canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
