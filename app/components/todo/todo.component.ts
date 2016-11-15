import { Component , OnInit } from '@angular/core';


@Component({

	selector:'todos',
	templateUrl:'./app/components/todo/todo.component.html'

})

export class TodoComponent implements OnInit {


	appName = "Angular2 App";

	todos = ['Apple','Banana','Orange'];

	newTodo = '';


	sayHello(){
		alert('Hey this '+ this.appName);
	}

	addTodo(){

		this.todos.unshift(this.newTodo);
		this.newTodo = '';

	}


	constructor(){

	}

	ngOnInit(){
		console.log('Todo Components')
	}
} 