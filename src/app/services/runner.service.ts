import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {interval} from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ChatRoomModel } from '../model/chatRoomModel';

@Injectable({
    providedIn: 'root'
})
export class RunnerService {
    roomName: EventEmitter<string> = new EventEmitter<string>();
    private serverUrl = environment.backendUrl
    private intervalSubs: Subscription = null
    ip: EventEmitter<string> = new EventEmitter<string>();
    public chat: Subject<[ChatRoomModel]> = new Subject<[ChatRoomModel]>();

    constructor(private http: HttpClient,
                private router: Router
    ) {
    }

    set setRoomName(r: string) {
        this.roomName.emit(r);
    }

    public runner() : void {
        let rname = localStorage.getItem('roomName')
        if (rname) {
            this.intervalSubs = interval(1500).subscribe(() => this.runnerRequest())
        }
    }

    public runnerRequest() : void {
        let rname = localStorage.getItem('roomName')
        if (rname) {
            this.http.get(`${this.serverUrl}/chat/room/${rname}`).subscribe(
                (d : [ChatRoomModel]) => {
                    this.chat.next(d);
                },
                (e) => {
                    this.router.navigate([
                        '/chat/hall'
                    ])
                }
            )
        }
    }

    public stopRunner() : void {
        if (this.intervalSubs) {
            this.intervalSubs.unsubscribe();
            this.intervalSubs = null;
        }
    }

    public fetchIp() : void {
        this.http.get(`${this.serverUrl}/getloc`).subscribe(
            (val : {ip: string}) => {
                this.ip.emit(val.ip)
            }
        )
    }
}
