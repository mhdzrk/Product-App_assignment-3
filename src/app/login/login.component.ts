import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { ProductlistService } from '../productlist.service';
import { Router } from '@angular/router';
import { loginModel } from './login.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private prlist:ProductlistService,private router:Router,
    private fb:FormBuilder) { }
users=new loginModel(null,null)

    registerForm=this.fb.group({
                        username:['',[Validators.required,Validators.minLength(6)]],
                        password:['',[Validators.minLength(8),Validators.required]]
    })

  ngOnInit(): void {
  }
loginUser(){
  this.prlist.login(this.users).subscribe(
    res=>{
      console.log(res);
      localStorage.setItem('token',res.token)
      this.router.navigate(['/'])
    },
    err=>{console.log(err);
    alert("invalid password or username")}
  )
}

}
