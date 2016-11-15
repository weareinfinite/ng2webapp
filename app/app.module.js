"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var material_1 = require('@angular/material');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
//Services 
var github_service_1 = require('./services/github.service');
var app_component_1 = require('./app.component');
var github_component_1 = require('./components/github/github.component');
var home_component_1 = require('./components/home/home.component');
var about_component_1 = require('./components/about/about.component');
var todo_component_1 = require('./components/todo/todo.component');
var ROUTES = router_1.RouterModule.forRoot([
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'todos',
        component: todo_component_1.TodoComponent
    }
]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, material_1.MaterialModule.forRoot(), ROUTES],
            declarations: [app_component_1.AppComponent, github_component_1.GithubComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, todo_component_1.TodoComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [github_service_1.GithubService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
