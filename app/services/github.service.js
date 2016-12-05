"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
        this.apiEndPoint = 'https://api.github.com/';
        console.info('Github Service Initialized');
    }
    GithubService.prototype.fetchUser = function () {
        return this.http.get(this.apiEndPoint + 'users/saratonite').map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    GithubService.prototype.getUser = function () {
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
        };
    };
    GithubService = __decorate([
        core_1.Injectable()
    ], GithubService);
    return GithubService;
}());
exports.GithubService = GithubService;
