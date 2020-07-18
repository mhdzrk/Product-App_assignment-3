import { Component, OnInit } from '@angular/core';
import {ProductlistService} from '../productlist.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public prlist:ProductlistService,private router:Router) { }
  title:string ="Product Management"

  ngOnInit(): void {
  }

}
