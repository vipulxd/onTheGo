import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { HallComponent } from './hall/hall.component';
import { RoomComponent } from './room/room.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';


// @ts-ignore
@NgModule({
  declarations: [
    HallComponent,
    RoomComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
