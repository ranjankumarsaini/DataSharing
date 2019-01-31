import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chield-toparent-pc',
  templateUrl: './chield-toparent-pc.component.html',
  styleUrls: ['./chield-toparent-pc.component.css']
})
export class ChieldToparentPcComponent implements OnInit {

  constructor() { }
message='Parent';
  ngOnInit() {
  }

  receiveMessage($event){
     console.log("message11===========>");
    this.message=$event;
    console.log("message===========>"+$event.value);
    
  }

}
