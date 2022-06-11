import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HallComponent} from './hall/hall.component'
import { RoomComponent } from './room/room.component';
const routes: Routes = [{
  path: 'room',
  component: RoomComponent,
},{
  path: 'hall',
  component: HallComponent,

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
