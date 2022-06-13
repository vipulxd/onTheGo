import { Component, ElementRef, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {
 public rname : string = '';
 warnString : string ='';
  constructor( private messageService : MessageService) { }

  ngOnInit(): void {
    localStorage.clear()
   this.messageService.warningString.subscribe(val=>{
     this.warnString = val;
   })
  }
 public roomName(e : Event) {
   if (e.target) {
     // @ts-ignore
     this.rname = e.target.value;
   }
 }
 public checkRoom(){
    this.messageService.checkRoom(this.rname)
 }
public createRoom(){
    this.messageService.createRoom(this.rname)
}
}
