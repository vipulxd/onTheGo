import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
public selfID = 1
    // @ts-ignore
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    public data = [
    {
      message:"helo",
      senderID: 1,
        sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
    },{
      message:"helo",
      senderID: 1,
          sender_name: "vipul"
    },
    {
      message : "How are you",
      senderID: 2,
        sender_name: "vipul"
    },
    {
      message: "i am good , how are you",
      senderID:1,
        sender_name: "vipul"
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
