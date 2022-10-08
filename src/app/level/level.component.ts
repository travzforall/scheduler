import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageMapCoordinate } from '../feature/image-map/image-map.component';
import { LevelService } from './level.service';
import { faClock } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

      public faClock = faClock;
      time = "";

      getLevel(level: any) {
        console.log(level)
        }

      level: any;
      
      levelForm: FormGroup<any> = new FormGroup({
        level: new FormControl('LL'),
      });


      constructor(private levelService: LevelService) {
        // this.
      }
    


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  setCurrentTime() {
    const date = new Date().getMinutes();
    // switch(date) {
    //   case date %
    // }
  }


 

}
