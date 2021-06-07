
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KindergartenListComponent } from './components/kindergarten-list/kindergarten-list.component';
import { HttpClientModule } from '@angular/common/http';
import { KindergartenService } from './services/kindergarten.service';

import { Routes, RouterModule, Router} from '@angular/router';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KindergartenDetailsComponent } from './components/kindergarten-details/kindergarten-details.component';
import { KindergartenCategoryMenuComponent } from './components/kindergarten-category-menu/kindergarten-category-menu.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoginComponent } from './components/login/login.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent
} from '@okta/okta-angular';
import myAppConfig from './config/my-app-config';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { CreateParComponent } from './components/create-par/create-par.component';
import { ParDetailsComponent } from './components/par-details/par-details.component';

import { ParListComponent } from './components/par-list/par-list.component';
import { UpdateParComponent } from './components/update-par/update-par.component';




const oktaConfig = Object.assign({
  onAuthRequired: (injector) => {
    const router = injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
  { path: '', redirectTo: 'par', pathMatch: 'full' },
  { path: 'pars', component: ParListComponent },
  { path: 'add', component: CreateParComponent },
  { path: 'update/:id', component: UpdateParComponent },
  { path: 'details/:id', component: ParDetailsComponent },

 
  {path: 'login-status', component: LoginStatusComponent},
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'kindergartens/:id', component: KindergartenDetailsComponent},
  {path: 'category/:id', component: KindergartenListComponent},
  {path: 'category', component: KindergartenListComponent},
  {path: 'kindergartens', component: KindergartenListComponent},
  {path: '', redirectTo: '/kindergartens', pathMatch: 'full'},
  {path: '**', redirectTo: '/kindergartens', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    KindergartenDetailsComponent,
    KindergartenListComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    KindergartenCategoryMenuComponent,
    OrderHistoryComponent,
    LoginComponent,
    LoginStatusComponent,
    CreateParComponent,
    ParDetailsComponent,
    
    ParListComponent,
    UpdateParComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    OktaAuthModule,
    FormsModule
    
    
  ],
  exports: [RouterModule],
  providers: [KindergartenService, { provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }