/**import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import {LoginComponent} from './views/user/login/login.component';
 import {ProfileComponent} from './views/user/profile/profile.component';
 import {RegisterComponent} from './views/user/register/register.component';
 const appRoutes: Routes = [
 {path: 'login', component: LoginComponent},
 {path: 'profile', component: ProfileComponent},
 {path: 'register', component: RegisterComponent}
 ]
 @NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
 export class AppRouting { }**/

import { Routes, RouterModule } from '@angular/router';​
import {ModuleWithProviders} from '@angular/core';
import {NgModule} from '@angular/core';

import { LoginComponent } from './views/user/login/login.component';​
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';

import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';

import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageNewComponent } from './views/page/page-new/page-new.component';
import { PageEditComponent } from './views/page/page-edit/page-edit.component';

import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';

import {AuthGuard} from './services/auth-guard.service';


const appRouting: Routes = [​
  { path: '', redirectTo: '/login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent},
{ path: 'user' , component: ProfileComponent, canActivate: [AuthGuard]},​
  { path: 'register', component: RegisterComponent},

{ path: 'user/:uid/website' , component: WebsiteListComponent, canActivate: [AuthGuard]},
{ path: 'user/:uid/website/new' , component: WebsiteNewComponent, canActivate: [AuthGuard]},
{ path: 'user/:uid/website/:wid' , component: WebsiteEditComponent, canActivate: [AuthGuard]},

{ path: 'user/:uid/website/:wid/page', component: PageListComponent, canActivate: [AuthGuard]},
{ path: 'user/:uid/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
{ path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard]},

{ path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
{ path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuard]},
{ path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard]}

];​

export const AppRouting = RouterModule.forRoot(appRouting);
// What does this line do?
// export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
