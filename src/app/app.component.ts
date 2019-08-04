import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project-ecommerce';
  nombre=0;
  authStatus:boolean=false;
  constructor(private authService:AuthService){}
  

  ngOnInit(){
this.authStatus=this.authService.isAuth;
  }

}
