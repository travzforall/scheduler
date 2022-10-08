import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ImageMapCoordinate } from 'src/app/feature/image-map/image-map.component';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-single-level',
  templateUrl: './single-level.component.html',
  styleUrls: ['./single-level.component.scss'],
  providers: [DatePipe]
})
export class SingleLevelComponent implements AfterViewInit {


      @Input() room_details: any;
      level: Observable<any> = new Observable<any>

      @Input() 
      coordinates: ImageMapCoordinate[] = []


      activeRooms: number[] = []

      currentDate: any = new Date();
 

      private routeSub: Subscription = new Subscription;

      constructor(private router: Router, private levelService: LevelService, private route: ActivatedRoute, private datePipe: DatePipe) { 

        this.getCurrentTime();
      this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
 
        var id = -1; 
        this.routeSub = this.route.params.subscribe(params => { 
          id = params['id'] 
          });

        this.level = this.levelService.getLevelState(id, this.currentDate, "10%3A00" ) ;


          this.level.subscribe(lev => {
            lev._room_of_level.forEach((el: any)=> {
              el._image_map_of_room.forEach((es: any) => {
                if(es._schedule_of_room.length > 0) {
                  this.activeRooms.push(el.id) 
                 }
                this.coordinates.push(es)
             
              })
            })
          })
 



      }

      getCoordinateStyle(id: number): object { 
        return { 
          background: this.isActive(id)?  'rgba(255, 0, 0, 0.50)': 'rgba(0, 255, 0, 0.50)'
        };
      }



        isActive(room: any) {
          return this.activeRooms.includes(room)
        }




      ngAfterViewInit(): void {

        console.log(this.getCoordinateStyle(10))

      }
 
    
      title = 'scheduler';
    
    
      name = 'Angular';
      image: string = 'assets/images/Screen Shot 2022-10-03 at 9.43.08 PM.png'
    
      showImage: boolean = false;
    
      getClick(coordinate: ImageMapCoordinate) {
        console.log(`Clicked on ${coordinate.room_type}`)
      }

      getCurrentTime() {

        var time = new Date();;

        console.log(time.getMinutes)
        
      }
     
      goToRoom(room: any) {

        if (!this.isActive(room)) {
          this.router.navigate(['room', room])
        }
      }
    
      postToDB() {
        this.levelService.postDummy(this.coordinates)
      }
    
     
    
}
