import {Component,Inject , Input,OnInit,Inject} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {Observable} from 'rxjs/Rx';

@Component({
	selector:'github',
	templateUrl:'./app/components/github/github.component.html',
	providers:[GithubService]

})

export class GithubComponent implements OnInit {


	@Input() username :string;

	public githubUser:any;

	public _user:any;


	constructor(private githubSrv: GithubService){

		console.log(this.githubSrv);

		console.log('Github component initialized');

	}


	ngOnInit(){

		this.githubUser = this.githubSrv.getUser();
		// this._user = this._githubService.fetchUser().subscribe(function(userdata){
		// 	console.log('------------------------------------sss');
		// });

	}



}