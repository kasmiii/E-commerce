import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.scss']
})
export class InsertProductComponent {

  promotion:number=0;
  constructor(private router:Router) { }

  
  ajouter(form : NgForm){
    console.log(form.value);
    
    this.router.navigate(["produits"]);
    
  }

}
