import { Component, OnInit , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chield-toparent-cc',
  templateUrl: './chield-toparent-cc.component.html',
  styleUrls: ['./chield-toparent-cc.component.css']
})
export class ChieldToparentCcComponent implements OnInit {

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
