import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegModel } from './register/regUser.model'
import { loginModel } from './login/login.model';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  product:any[]=[];

  constructor(private http:HttpClient) { }
  private productlisturl='http://localhost:4000/products'
  private addproductUrl='http://localhost:4000/add'
  private deleteUrl='http://localhost:4000/products/delete'
  private updateUrl='http://localhost:4000/products/edit'
  private signupUrl='http://localhost:4000/signup'
  private loginUrl='http://localhost:4000/login'
  loadProducts(){
    return this.http.get<any>(this.productlisturl);
  }
  newProduct(item){
    return this.http.post<any>(this.addproductUrl,item).subscribe(data=>{
      console.log(data)
    });
  }
deleteProduct(_id:String){
  return this.http.delete<any>(this.deleteUrl + `/${_id}`).subscribe(data=>{
    console.log(data)
  })
}
gettoupdate(_id:String){
  return this.http.get<any>(this.productlisturl + `/${_id}`)
}

updateproduct(id,item){
  return this.http.put<any>(this.updateUrl + `/${id}`,item).subscribe(res=>{
    console.log(res)
  },
  err=>{console.log(err)})
}
signup(item:RegModel){
  return this.http.post<any>(this.signupUrl,item)
}
login(item:loginModel){
  return this.http.post<any>(this.loginUrl,item)
}
loggedIn(){
  return !!localStorage.getItem('token')
}
logOut(){
  localStorage.removeItem('token')
}
}
