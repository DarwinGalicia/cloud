import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-docker';

  number_value_1 = 0;
  number_value_2 = 0;
  answer = 0;

  constructor() { }

  ngOnInit(): void {
  }

  type(_type) {
    if (_type === '+') {
      this.answer = this.number_value_1 + this.number_value_2;
    } else if (_type === '-') {
      this.answer = this.number_value_1 - this.number_value_2;
    }
  }
}
