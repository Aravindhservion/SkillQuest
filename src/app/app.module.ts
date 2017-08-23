import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { PopularskillComponent } from './popular_skill/popular_skill.component';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { HeadComponent } from './head/head.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import 'hammerjs';
export const ROUTES: Routes = [
	 {  path: '', redirectTo: '/home' ,pathMatch:'full' },
	 { path: 'home', component: HomeComponent },
	 { path: 'account', component: AccountComponent },
	 { path: 'assessment', component: AssessmentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
	AssessmentComponent,
	HeadComponent,
	AccountComponent,
	PopularskillComponent,
	HomeComponent],
	
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
	 RouterModule.forRoot(ROUTES)
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
