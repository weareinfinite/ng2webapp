"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TodoComponent = (function () {
    function TodoComponent() {
        this.appName = "Angular2 App";
        this.todos = ['Apple', 'Banana', 'Orange'];
        this.newTodo = '';
    }
    TodoComponent.prototype.sayHello = function () {
        alert('Hey this ' + this.appName);
    };
    TodoComponent.prototype.addTodo = function () {
        this.todos.unshift(this.newTodo);
        this.newTodo = '';
    };
    TodoComponent.prototype.ngOnInit = function () {
        console.log('Todo Components');
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            templateUrl: './app/components/todo/todo.component.html'
        })
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;