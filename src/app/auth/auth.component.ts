import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
}) 
export class AuthComponent implements OnInit {
  authStatus:boolean=false;
  text:string;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.authStatus=this.authService.isAuth;
  }

onSignIn(){
this.authService.signIn();
this.router.navigate(['produits']);
}
onSignOut(){
  this.authService.signOut();
  this.router.navigate(['auth']);
}

onSubmit(form : NgForm){
const username=form.value['username'];
const password=form.value['password'];
console.log(username+' '+password);
if(username===' ' && password===' '){
  this.onSignIn();
}

else{
  this.authService.isAuth=false;
  this.onSignOut();
  alert('the username or the password is incorrect !')
}
}
}
