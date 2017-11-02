import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data = [
    {id: 1, name: 'Florent', role: 'ADMIN'},
    {id: 2, name: 'Admin', role: 'ADMIN'},
    {id: 3, name: 'User', role: 'USER'}
  ];

  constructor() {
    let newItem =
      {id: 4, name: 'Tony', role: 'USER'}
    ;

    this.data.push(newItem);
  }
}
