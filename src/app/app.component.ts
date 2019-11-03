import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name1 = 'Angular 6';

  response = 'Nothing';

  color = 'green';

  respond() {
    this.response = 'Success';
  }

  changeColor(color) {
    this.color = color;
  }

  changeTitle(title){
    this.name1 = title;
  }

}
