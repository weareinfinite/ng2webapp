import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {

	appName = "Angular2 App"

	sayHello(){
		alert('Hey this '+ this.appName);
	}
}