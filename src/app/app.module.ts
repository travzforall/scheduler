import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageMapComponent } from './feature/image-map/image-map.component';
import { ViewRoomComponent } from './room/view-room/view-room.component';
import { LevelComponent } from './level/level.component';
import { WeekViewComponent } from './room/week-view/week-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageMapComponent,
    ViewRoomComponent,
    LevelComponent,
    WeekViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
