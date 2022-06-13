import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RunnerService } from './runner.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 public rname : string ='' ;
 public warningString : EventEmitter<string> = new EventEmitter<string>();
  constructor(private http : HttpClient,
              private router : Router,
              private runner : RunnerService
  ) { }
public checkRoom(val : string) {
 let rname = val
    this.http.get(`http://localhost:9090/hall/room/${rname}`).subscribe(
      (s)=>{
        if(s){
          // @ts-ignore
          this.runner.roomName = s.id;
          // @ts-ignore
          localStorage.setItem('roomName',s.id)
          // @ts-ignore
          if(s.length = 0){
            this.warningString.emit( 'No such active room')
          }
          this.runner.runner()
          this.router.navigate(['/chat/room']);
        }else {
          this.warningString.emit('No such active room found')
        }
      },
      (e)=>{
        console.log(e)
        this.warningString.emit(e.error.status)
      }
    )
}
public createRoom(val: string){
    let rname = val;
    let data = {"name":rname}
  JSON.stringify(data);
    this.http.post('http://localhost:9090/hall/room',data).subscribe(
      (v)=>{
       // @ts-ignore
        if(v.name){
          this.runner.runner()
         this.router.navigate(['/chat/room']);
         // @ts-ignore
          this.runner.roomName = v.id;
          // @ts-ignore
          localStorage.setItem('roomName',v.id)
       }
      },
      (e)=>{
       this.warningString.emit("Room Already taken !")
      }
    )
}
public sendMessage(d : any){
    this.http.post('http://localhost:9090/chat/message',d).subscribe(
      val =>{
        console.log(val)
      },
      (e)=>{

        this.router.navigate(['/chat/hall'])
        this.warningString.emit('Room expired .')
      }
    )
}
}
