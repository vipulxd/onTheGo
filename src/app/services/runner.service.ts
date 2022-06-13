import {EventEmitter, Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  roomName : string = 'testLink'
  interval : any;
  ip : EventEmitter<string> = new EventEmitter<string>();
  public chat : BehaviorSubject<any>  = new BehaviorSubject([]);
  constructor(private http : HttpClient,
              private router : Router
              ) { }
  set setRoomName(r : string) {
    this.roomName = r;
  }

  public runner() {
    let rname = localStorage.getItem('roomName')
    if (rname) {
     this.interval= setInterval(() => {
        this.http.get(`http://localhost:9090/chat/room/${rname}`).subscribe(
          (d) => {
            this.chat.next(d);
            console.log(d)
          },
          (e) => {
            this.router.navigate([
              '/chat/hall'
            ])
          }
        )
      }, 1500)
    }
  }
  public stopRunner(){
    clearInterval(this.interval)
  }
public fetchIp() {
    this.http.get('http://localhost:9090/getloc').subscribe(
      (val)=>{
        // @ts-ignore
        this.ip.emit(val.ip)
      }
    )
}
}
