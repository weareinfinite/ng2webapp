import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { MaterialModule } from '@angular/material';

//Services 

import {GithubService} from './services/github.service';

import { AppComponent }   from './app.component';
import {GithubComponent} from  './github/github.component';




@NgModule({
	imports: [BrowserModule,FormsModule,MaterialModule.forRoot()],
	declarations: [ AppComponent,GithubComponent ],
	bootstrap: [AppComponent],
	providers:[GithubService]
})


export class AppModule {

} 