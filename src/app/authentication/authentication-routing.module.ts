import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { Error1Component } from './error-1/error-1.component';
import { Error2Component } from './error-2/error-2.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
    },
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
    data: {
      title: 'forget password',
    },
  },

  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {
      title: 'Sign Up',
    },
  },
  {
    path: 'error-1',
    component: Error1Component,
    data: {
      title: 'Error 1',
    },
  },
  {
    path: 'error-2',
    component: Error2Component,
    data: {
      title: 'Error 2',
    },
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
