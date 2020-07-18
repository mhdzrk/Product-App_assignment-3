import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProductlistService } from './productlist.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private prlist:ProductlistService,private router:Router){}


  canActivate():boolean{
    if(this.prlist.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }

}
