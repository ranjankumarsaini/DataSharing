import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import {ChieldtoparentviaviewchieldCcComponent} from'../chieldtoparentviaviewchield-cc/chieldtoparentviaviewchield-cc.component'

@Component({
  selector: 'app-chieldtoparentviaviewchield-pc',
  templateUrl: './chieldtoparentviaviewchield-pc.component.html',
  styleUrls: ['./chieldtoparentviaviewchield-pc.component.css']
})
export class ChieldtoparentviaviewchieldPcComponent implements OnInit {
@ViewChild(ChieldtoparentviaviewchieldCcComponent) child;

  constructor() { }
message:string="Hello Ranjan";
  ngOnInit() {
  }
ngAfterViewInit(){
this.message=this.child.message;
}
receiveMessage($event){
     console.log("message11===========>");
    this.message=$event;
    console.log("message===========>"+$event.value);
    
  }
}
