import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import 'hammerjs';

import { ModuleComponent } from './module/module.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { PopularskillComponent } from './popular_skill/popular_skill.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { AccountComponent } from './account/account.component';

export const ROUTES: Routes = [
	 {  path: '', redirectTo: '/home' ,pathMatch:'full' },
	 { path: 'home', component: HomeComponent },
	 { path: 'account', component: AccountComponent },
	 { path: 'assessment', component: AssessmentComponent },
	 { path: 'assessment/:module', component: ModuleComponent }
	 
];
@NgModule({
  declarations: [
    AppComponent,
	AssessmentComponent,
	HeadComponent,
	AccountComponent,
	PopularskillComponent,
	HomeComponent,
	ModuleComponent],
	
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MdButtonModule,
	MdCardModule,
	MdMenuModule,
	MdToolbarModule,
	MdIconModule ,
	FlexLayoutModule,
	MaterialModule,
	 RouterModule.forRoot(ROUTES,{ useHash: true })
	
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
