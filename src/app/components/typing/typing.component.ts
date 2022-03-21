import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css'],
})
export class TypingComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  randomText =
    'Remember, if the time should come, when you have to make a choice between what is right and what is easy, remember what happened to a boy who was good, and kind, and brave, because he strayed across the path of Lord Voldemort. Remember Cedric Diggory.';
  typedText = '';

  onInput(value: string) {
    this.typedText = value;
  }

  compare(randomLetter: string, typedLetter: string) {
    if (!typedLetter) {
      return 'pending';
    }

    return randomLetter === typedLetter ? 'correct' : 'incorrect';
  }
}
