import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-docker';

  number1 = 0;
  number2 = 0;
  answer = 0;

  constructor() { }

  ngOnInit(): void {
  }

  type(_type) {
    console.log("Llego, aqui" + _type);
    console.log(this.number1);
    if (_type == '+') {
      this.answer = this.number1 + this.number2;
    } else if (_type == '-') {
      this.answer = this.number1 - this.number2;
    }
  }
}
