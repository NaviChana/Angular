import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'login'     ,   component: LoginComponent},
  {path:'signup'    ,   component: SignupComponent},
  {path:'header'    ,   component: HeaderComponent},
  {path:'products'  ,   component: ProductsComponent},
  {path:'cart'      ,   component: CartComponent},
  {path: '**'       ,   component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
