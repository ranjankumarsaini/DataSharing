import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent-tochield-cc',
  templateUrl: './parent-tochield-cc.component.html',
  styleUrls: ['./parent-tochield-cc.component.css']
})
export class ParentTochieldCcComponent implements OnInit {
@Input() chieldmessage : string; 
  constructor() { }

  ngOnInit() {
  }

}
