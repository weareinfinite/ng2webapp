import {Component,Input,OnInit} from '@angular/core';
import {GithubService} from './../../services/github.service';

@Component({
	selector:'github',
	templateUrl:'./app/components/github/github.component.html'

})

export class GithubComponent implements OnInit {


	@Input() username :string;

	githubUser:any;


	constructor(){

		console.log('Github component initialized');

		this.githubService = new GithubService();

	}

	ngOnInit(){
		console.log(this.username);

		this.githubUser = this.githubService.getUser();
	}



}