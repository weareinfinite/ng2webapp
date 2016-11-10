import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {

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
}