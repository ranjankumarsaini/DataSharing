import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chieldtoparentviaviewchield-cc',
  templateUrl: './chieldtoparentviaviewchield-cc.component.html',
  styleUrls: ['./chieldtoparentviaviewchield-cc.component.css']
})
export class ChieldtoparentviaviewchieldCcComponent implements OnInit {

   constructor() { }
message:string ="Hi Ranjan Kumar";
@Output() messageEvent=new EventEmitter<string>();
  ngOnInit() {
  }

sendMessage(){
  console.log("chield1===========>"+this.message);
  this.messageEvent.emit(this.message);
  console.log("chield2222===========>");
}

}
