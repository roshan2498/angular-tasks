import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  counter: number = 0;
  ngOnChanges(): void {
    console.log('Component Changed!')
  }
  @Output() thanks: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }
  ngOnInit(): void {
  }

  sayThanks($event: any) {
    this.thanks.emit('Thank You');
  }

}
