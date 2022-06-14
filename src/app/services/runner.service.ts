import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {interval} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RunnerService {
    roomName: EventEmitter<string> = new EventEmitter<string>();
    private intervalSubs: Subscription = null
    ip: EventEmitter<string> = new EventEmitter<string>();
    public chat: Subject<any> = new Subject<any>();

    constructor(private http: HttpClient,
                private router: Router
    ) {
    }

    set setRoomName(r: string) {
        this.roomName.emit(r);
    }

    public runner() {
        let rname = localStorage.getItem('roomName')
        if (rname) {
            this.intervalSubs = interval(1500).subscribe(() => this.runnerRequest())
        }
    }

    public runnerRequest() {
        let rname = localStorage.getItem('roomName')
        if (rname) {
            this.http.get(`http://13.126.239.171:9090/chat/room/${rname}`).subscribe(
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
        }
    }

    public stopRunner() {
        if (this.intervalSubs) {
            this.intervalSubs.unsubscribe();
            this.intervalSubs = null;
        }
    }

    public fetchIp() {
        this.http.get('http://13.126.239.171:9090/getloc').subscribe(
            (val) => {
                // @ts-ignore
                this.ip.emit(val.ip)
            }
        )
    }
}
