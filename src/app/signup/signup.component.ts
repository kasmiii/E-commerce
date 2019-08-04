import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isChecked : boolean;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  onCreate(form:NgModel){
const  password=form.value['password'];
const  passwordconfirmed=form.value['passwordconfirmed'];
if(password!==passwordconfirmed){
  alert('the password and the confirmed password should are the same');
  this.router.navigate(['signup']);
}
else{
  //dans ce cas form.value['seller](de checkbox) retoàurne true si le checkbox est choisi,false sinon
  console.log(form.value);
  console.log('la valeur de checkbox est:'+form.value['seller']);
  
  this.router.navigate(['produits']);
}

}

}
