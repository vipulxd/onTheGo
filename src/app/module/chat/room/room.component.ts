import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
public selfID = 1
    public selfIP = '127.0.0.1'
    // @ts-ignore
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    public data = [
    {
      message:"helo",
      senderID: 1,
        sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "127.0.0.1"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "127.0.0.1"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "127.0.0.1"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "90.11.221.21"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "192.168.11.92"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  public sendData(){
    let data = {
        message : "who are you ",
        senderID : 21,
        sender_name : "KC"
    }
    this.data.push(data);
   this.scrollToBottom()
  }
    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }
}
