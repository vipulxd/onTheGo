import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ChatRoomModel } from 'src/app/model/chatRoomModel';
import {MessageService} from 'src/app/services/message.service';
import {RunnerService} from 'src/app/services/runner.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, AfterViewInit , OnDestroy {
  public selfID : number = 1
  public selfIP : string = ''
  // @ts-ignore
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public message: string = '';
  public data : [ChatRoomModel] | undefined ;

  constructor(private runner: RunnerService,
              private msgService: MessageService
  ) {
  }

  public setMessage(e: Event, r: any) {
    // @ts-ignore
    this.message = e.target.value
  }

  ngOnInit(): void {
    this.runner.ip.subscribe(
      val => {
        this.selfIP = val
      }
    )
    this.runner.chat.subscribe((response : [ChatRoomModel]) => {
      this.data = response;
    })
    this.scrollToBottom()
  }

  ngAfterViewInit() {
    this.runner.fetchIp();
    this.runner.runner();

  }
  ngOnDestroy(){
      console.log('destroying')
    this.runner.stopRunner()
  }

  public sendData() {
    let data = {
      message: this.message,
      rid: localStorage.getItem('roomName')
    }
    this.msgService.sendMessage(data)
    this.scrollToBottom()
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
