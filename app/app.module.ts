import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

//Services 

import {GithubService} from './services/github.service';

import { AppComponent }   from './app.component';
import {GithubComponent} from  './github/github.component';
import {HomeComponent} from  './components/home/home.component';
import {AboutComponent} from  './components/about/about.component';





var ROUTES =  RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
      	path:'about',
      	component:AboutComponent
      }
    ]);




@NgModule({
	imports: [BrowserModule,FormsModule,HttpModule,MaterialModule.forRoot(),ROUTES],
	declarations: [ AppComponent,GithubComponent,HomeComponent,AboutComponent],
	bootstrap: [AppComponent],
	providers:[GithubService]
})


export class AppModule {

} 