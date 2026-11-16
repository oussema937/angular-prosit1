import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title : string;
  state: boolean;
  constructor() {
    this.title='home 4DAS 10';
    this.state=true;
  }
  change(){
    this.title='home 4DAS 9';
    this.state=false;
  }

}
