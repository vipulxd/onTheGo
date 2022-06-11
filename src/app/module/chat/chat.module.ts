import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { HallComponent } from './hall/hall.component';
import { RoomComponent } from './room/room.component';


// @ts-ignore
@NgModule({
  declarations: [
    HallComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
