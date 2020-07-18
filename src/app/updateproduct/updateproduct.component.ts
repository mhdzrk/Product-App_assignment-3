import { Component, OnInit } from '@angular/core';
import { ProductlistService} from '../productlist.service';
import { ProductModel } from '../product-list/product.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  id='';
  title:String="Update Product"
  product=<any>('')
  productItem=new ProductModel(null,null,null,null,null,null,null,null)
  constructor(private prlist:ProductlistService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap=>{
      this.id=parameterMap.get('id')
      console.log(this.id)
    })
  this.prlist.gettoupdate(this.id).subscribe(res=>{
    this.product=JSON.parse(JSON.stringify(res));
    console.log(this.product);

  })
  }
  UpdateProduct(){
    this.prlist.updateproduct(this.product._id,this.productItem)
    this.router.navigate(['/']);
   
  }
  

}
