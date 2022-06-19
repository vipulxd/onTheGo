import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { RunnerService } from './runner.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 public rname : string ='' ;
 private serverUrl = environment.backendUrl
 public warningString : EventEmitter<string> = new EventEmitter<string>();
  constructor(private http : HttpClient,
              private router : Router,
              private runner : RunnerService
  ) { }
public checkRoom(val : string) {
 let rname = val
    this.http.get(`${this.serverUrl}/hall/room/${rname}`).subscribe(
      (s)=>{
        if(s){
          // @ts-ignore
          this.runner.roomName.emit(s.id);
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
        this.warningString.emit(e.error.status)
      }
    )
}
public createRoom(val: string){
    let rname = val;
    let data = {"name":rname}
  JSON.stringify(data);
    this.http.post(`${this.serverUrl}/hall/room`,data).subscribe(
      (v)=>{
       // @ts-ignore
        if(v.name){
          this.runner.runner()
         this.router.navigate(['/chat/room']);
         // @ts-ignore
          this.runner.roomName.emit(v.id);
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
    this.http.post(`${this.serverUrl}/chat/message`,d).subscribe(
      () =>{},
      (e)=>{
        this.router.navigate(['/chat/hall'])
        this.warningString.emit('Room expired .')
      }
    )
}
}
