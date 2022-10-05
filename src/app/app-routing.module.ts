import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { ViewRoomComponent } from './room/view-room/view-room.component';
import { WeekViewComponent } from './room/week-view/week-view.component';

const routes: Routes = [
  {
    path: '',
    component: LevelComponent,
  },
  {
    path: 'room/:id',
    component: ViewRoomComponent,
  },
  {
    path: 'week/:id',
    component: WeekViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
