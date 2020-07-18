import { Component, OnInit } from '@angular/core';
import {ProductlistService} from '../productlist.service';
import {ProductdelModel} from './productdel.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products:[];
  title:String = "Product List";
  imageWidth:number=50;
  imageMargin:number=2;

  showImage:Boolean = false;
  constructor(private prlist:ProductlistService,private router:Router) { }
  
  toggleImage(){
    this.showImage=!this.showImage
  }


  ngOnInit(): void {
    this.prlist.loadProducts().subscribe(
      res=>{
        this.products=JSON.parse(JSON.stringify(res))
              
      },
      err=>console.log(err)
    )
  }
  deleteOne(_id:String){
    if(confirm('Are you sure to delete this product?')==true){
      this.prlist.deleteProduct(_id);
      this.ngOnInit();
    }
  
  
  }
  editproduct(id){
    this.router.navigate(['/edit',id]);
  }

}
