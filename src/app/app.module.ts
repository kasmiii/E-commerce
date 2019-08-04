import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FauteComponent } from './faute/faute.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { TestComponent } from './test/test.component';
import { ProduitComponent } from './produit/produit.component';
//import "/assets/js/model3d.js";
//le routage
const appRoutes:Routes=[
  {path:'auth',component:AuthComponent},
  {path:'produit',component:ProduitComponent},
  {path:'signup',component:SignupComponent},
  {path:'insertProduct',canActivate: [AuthGuard],component:InsertProductComponent},
  {path:'tests',component:TestComponent},
  {path:'erreur',component:FauteComponent},
  {path:'**',redirectTo:'/erreur'}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FauteComponent,
    SignupComponent,
    InsertProductComponent,
    TestComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }