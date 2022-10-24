import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LevelComponent } from './level/level.component';
import { SingleLevelComponent } from './level/single-level/single-level.component';
import { ManagementComponent } from './management/management.component';
import { ViewRoomComponent } from './room/view-room/view-room.component';
import { WeekViewComponent } from './room/week-view/week-view.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'level/:id',
    component: LevelComponent
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'room/:id/:date',
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
