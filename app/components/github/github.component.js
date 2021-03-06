"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var github_service_1 = require('../../services/github.service');
var GithubComponent = (function () {
    function GithubComponent(githubSrv) {
        this.githubSrv = githubSrv;
        console.log(this.githubSrv);
        console.log('Github component initialized');
    }
    GithubComponent.prototype.ngOnInit = function () {
        this.githubUser = this.githubSrv.getUser();
        // this._user = this._githubService.fetchUser().subscribe(function(userdata){
        // 	console.log('------------------------------------sss');
        // });
    };
    __decorate([
        core_1.Input()
    ], GithubComponent.prototype, "username");
    GithubComponent = __decorate([
        core_1.Component({
            selector: 'github',
            templateUrl: './app/components/github/github.component.html',
            providers: [github_service_1.GithubService]
        })
    ], GithubComponent);
    return GithubComponent;
}());
exports.GithubComponent = GithubComponent;
