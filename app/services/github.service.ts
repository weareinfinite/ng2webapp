import { Injectable,Inject }     from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class GithubService {

	apiEndPoint = 'https://api.github.com/'

	constructor(private http:Http){
		console.info('Github Service Initialized');
	}

	fetchUser(){

		return this.http.get(this.apiEndPoint + 'users/saratonite').map((res)=> res.json())
		 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

	}

	getUser(){
		return {
			  "login": "saratonite",
			  "id": 4659838,
			  "avatar_url": "https://avatars.githubusercontent.com/u/4659838?v=3",
			  "gravatar_id": "",
			  "url": "https://api.github.com/users/saratonite",
			  "html_url": "https://github.com/saratonite",
			  "followers_url": "https://api.github.com/users/saratonite/followers",
			  "following_url": "https://api.github.com/users/saratonite/following{/other_user}",
			  "gists_url": "https://api.github.com/users/saratonite/gists{/gist_id}",
			  "starred_url": "https://api.github.com/users/saratonite/starred{/owner}{/repo}",
			  "subscriptions_url": "https://api.github.com/users/saratonite/subscriptions",
			  "organizations_url": "https://api.github.com/users/saratonite/orgs",
			  "repos_url": "https://api.github.com/users/saratonite/repos",
			  "events_url": "https://api.github.com/users/saratonite/events{/privacy}",
			  "received_events_url": "https://api.github.com/users/saratonite/received_events",
			  "type": "User",
			  "site_admin": false,
			  "name": "Sarath",
			  "company": "Moovooz",
			  "blog": "http://saratonite.github.io",
			  "location": "Kerala , India (IN).",
			  "email": null,
			  "hireable": true,
			  "bio": "Being  part of  creating stuff for the   universe :earth_asia: is AWESOME :smile: ",
			  "public_repos": 125,
			  "public_gists": 6,
			  "followers": 20,
			  "following": 211,
			  "created_at": "2013-06-10T09:50:28Z",
			  "updated_at": "2016-10-31T07:27:17Z"
			}
	}
}