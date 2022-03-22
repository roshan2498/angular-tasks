import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Component Interaction';
  counter = 5;
  thankYouText = '';
  constructor() {
    console.log("constructor called!");
  }
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  sayThanks(event: any) {
    this.thankYouText = event;
  }

  ngOnInit(): void {
    console.log('Component Init');
  }

  ngOnDestroy(): void {
    console.log('Component Destroy');
  }

}
