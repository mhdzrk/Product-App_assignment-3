import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { ProductlistService } from '../productlist.service';
import { Router } from '@angular/router';
import { RegModel } from './regUser.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private prlist:ProductlistService,private router:Router,
                private fb:FormBuilder) { }
                users=new RegModel(null,null,null,null,null)

            registerForm=this.fb.group(
                    {
                        name: ['',[Validators.minLength(4),Validators.required]],
                        email:['',[Validators.required,Validators.email]],
                        username:['',[Validators.required,Validators.minLength(6)]],
                        password:['',[Validators.minLength(8),Validators.required]],
                        phone:['',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]{10,10}")]]
            
                     })

  ngOnInit(): void {}
  
  

registerUser(){
    this.prlist.signup(this.users).subscribe( res=>{
      console.log(res);
      localStorage.setItem('token',res.token)
      this.router.navigate(['/'])
    },
    err=>{console.log(err);
      

    }
  )
    
}

}
