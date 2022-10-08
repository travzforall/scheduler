import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageMapComponent } from './feature/image-map/image-map.component';
import { ViewRoomComponent } from './room/view-room/view-room.component';
import { LevelComponent } from './level/level.component';
import { WeekViewComponent } from './room/week-view/week-view.component';
import { LevelService } from './level/level.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { OpenDialogRoomComponent } from './room/open-dialog-room/open-dialog-room.component'; 
import { RoomServiceService } from './room/room-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleLevelComponent } from './level/single-level/single-level.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from './feature/loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 

@NgModule({
  declarations: [
    AppComponent,
    ImageMapComponent,
    ViewRoomComponent,
    LevelComponent,
    WeekViewComponent,
    HomeComponent,
    ManagementComponent,
    UsersComponent,
    SettingsComponent, 
    OpenDialogRoomComponent, SingleLevelComponent, LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  providers: [
    LevelService,
    RoomServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
