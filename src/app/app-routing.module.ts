import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path : 'overview',
      loadChildren : ()=> import('./module/preview/preview.module').then(m => m.PreviewModule)
    },
  {
    path: 'chat',
    loadChildren: () => import('./module/chat/chat.module').then(m => m.ChatModule)
  },
    {
        path: '',
        redirectTo: 'overview',
        pathMatch : 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
