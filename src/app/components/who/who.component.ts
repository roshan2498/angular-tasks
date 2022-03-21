import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent{
  userName = "";
  isHidden = false;

  setIsHidden(val:boolean){
    this.isHidden = val;
  }
}
