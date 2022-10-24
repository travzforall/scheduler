import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OpenDialogRoomComponent } from '../open-dialog-room/open-dialog-room.component';
import { RoomServiceService } from '../room-service.service'; 
import { DateTime } from 'luxon'; 

export enum STATUS {
  OPEN = "Open",
  CHOSEN = "Chosen",
  RESERVED = "Reserved",
  CLOSED = "Closed",
  PENDING = "Pending",
}


@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewRoomComponent implements OnInit {
  currentEndTime: string = "";
  roomDetails: any;


selectTimeslot(timeslot: { name: string; status: STATUS; }) {
   console.log(timeslot)
   this.requestForm.controls.start.setValue(timeslot.name)
}
  routeSub: any;
  room: any;
  dailyEvents: Observable<any>;
  endTime: any;
  
  requestForm = new FormGroup({
    date: new FormControl(''),
    room: new FormControl(''),
    start: new FormControl('09:00'),
    duration: new FormControl(90),
    end: new FormControl(''),
    type: new FormControl(''),
    purpose: new FormControl('0'),
  });

  date: any;



selectDate(day1: Date, day2: any) {
  return day1.toISOString().slice(0,10) == day2
}
 

  openDialog() {
    const dialogRef = this.dialog.open(OpenDialogRoomComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  selectTimeFrame() {

    var overLap = false;

    this.time.forEach(t => {
      console.log(t)
      if(t.status !=  STATUS.RESERVED) {
        t.status =  STATUS.OPEN
      } else if(t.status ==  STATUS.RESERVED){
        overLap = true; 
      }
    })
 
    const start = this.requestForm.controls.start.value;
    const end = this.requestForm.controls.end.value;
    var open = true;

    var i =  this.time.findIndex(t => t.name === start);

    while(open) {
      this.time[i].status = STATUS.CLOSED;

      i = i+1;

      if(this.time[i].name == end) {
        open = false;
      }
    }
    console.log(overLap)
    return overLap;
  }


  getTimedEvents() {
   var allEvents: any[] = []; 
   return allEvents;
  }


  getSessionsByDay(date: DateTime) { 
    console.log(date)
    return this.roomService.getSessionsByDay(this.requestForm.controls.room.value, date);
  }

  setEndTime(event: any) { 
    const startTime = this.requestForm.get('start')?.value
    const date = this.requestForm.get('date')?.value
    const duration = this.requestForm.get('duration')?.value 
    this.addHours(startTime, date, duration) 
    if(this.selectTimeFrame()){
      this.requestForm.controls.duration.setErrors({invalid: true})
      console.log(true,  2443)
    }
     
  }


   addHours(start: any, date: any, duration: any) { 
    const start_date = DateTime.fromISO(`${date}T${start}`);
   this.requestForm.controls.end.setValue(start_date.plus({minutes: duration}).toFormat("HH:mm"))
 
    // console.log(start, start_date)
    return start_date.plus({minutes: duration}).toLocaleString({...DateTime.TIME_SIMPLE});
  }



  constructor(public dialog: MatDialog, private router: Router,  private route: ActivatedRoute, private roomService: RoomServiceService) {
    this.routeSub = this.route.params.subscribe(params => { 
      this.requestForm.controls.room.setValue(params['id'])
      this.date = params['date'] 
      this.requestForm.controls.date.setValue(params['date'])

      });

    const start_date = DateTime.fromISO(this.date)

      this.dailyEvents = this.getSessionsByDay(start_date);

      
      this.dailyEvents.subscribe((data: any) => {

        this.roomDetails = data.room;
        data.schedules.forEach((schedule: any) => { 
          this.setTimeActive(schedule['start_time'])
        }) 
      })


   }

  ngOnInit(): void {
    console.log(this.setEndTime(new Event("")))

    // this.selectTimeFrame();
  }

   getNextDayOfWeek(date: Date, dayOfWeek: number) { 
    var resultDate = new Date(date.getTime()); 
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7); 
    return resultDate;
}


  getNextWeekDates() { 
    const d1 = new Date(this.date);  
    const start_date = DateTime.now();
    const end_date = start_date.plus({days: 5}) 
    return this.getDatesInRange(start_date, end_date);
  }


  setTimeActive(timeToSet: string) {

    this.time.forEach(timespan => { 

      if(timespan.name == timeToSet) {
        timespan.status = STATUS.RESERVED;
      }
    })
  }
  

  time = [ 
    {name: '09:00', status: STATUS.OPEN},
    {name: '09:15', status: STATUS.OPEN},
    {name: '09:30', status: STATUS.OPEN},
    {name: '09:45', status: STATUS.OPEN}, 
    {name: '10:00', status: STATUS.OPEN},
    {name: '10:15', status: STATUS.OPEN},
    {name: '10:30', status: STATUS.OPEN},
    {name: '10:45', status: STATUS.OPEN}, 
    {name: '11:00', status: STATUS.OPEN},
    {name: '11:15', status: STATUS.OPEN},
    {name: '11:30', status: STATUS.OPEN},
    {name: '11:45', status: STATUS.OPEN}, 
    {name: '12:00', status: STATUS.OPEN},
    {name: '12:15', status: STATUS.OPEN},
    {name: '12:30', status: STATUS.OPEN},
    {name: '12:45', status: STATUS.OPEN}, 
    {name: '01:00', status: STATUS.OPEN},
    {name: '01:15', status: STATUS.OPEN},
    {name: '01:30', status: STATUS.OPEN},
    {name: '01:45', status: STATUS.OPEN}, 
    {name: '02:00', status: STATUS.OPEN},
    {name: '02:15', status: STATUS.OPEN},
    {name: '02:30', status: STATUS.OPEN},
    {name: '02:45', status: STATUS.OPEN}, 
    {name: '03:00', status: STATUS.OPEN},
    {name: '03:15', status: STATUS.OPEN},
    {name: '03:30', status: STATUS.OPEN},
    {name: '03:45', status: STATUS.OPEN}, 
    {name: '04:00', status: STATUS.OPEN},
    {name: '04:15', status: STATUS.OPEN},
    {name: '04:30', status: STATUS.OPEN},
    {name: '04:45', status: STATUS.OPEN}, 
    {name: '05:00', status: STATUS.OPEN},
    {name: '05:15', status: STATUS.OPEN},
    {name: '05:30', status: STATUS.OPEN},
    {name: '05:45', status: STATUS.OPEN}, 
    {name: '06:00', status: STATUS.OPEN},
    {name: '06:15', status: STATUS.OPEN},
    {name: '06:30', status: STATUS.OPEN},
    {name: '06:45', status: STATUS.OPEN}, 
    {name: '7:00', status: STATUS.OPEN}
  ]

  postRequest(data: any) {
    this.roomService.postRequest(data).subscribe(e => {
      console.log(e)
    })
  }

  navigateToPage(event: any) { 
    const toDate = new Date(event.target.value).toISOString().slice(0,10); 
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['../room', `${this.requestForm.controls.room.value}`, `${toDate}`]));

  }

 getDatesInRange(startDate: DateTime, endDate: DateTime) {
    const date = startDate.toJSDate(); 
    const end = endDate.toJSDate();
    end.setDate(end.getDate() + 1);

    const dates = [];
   
    while (date <= end) {  
      if(date.getDay() != 6 && date.getDay() != 0) {
      dates.push(new Date(date));
      }
      date.setDate(date.getDate() + 1); 
    } 
    return dates;
  }
  


  getClassOf(val: STATUS) { 

    var returnArr = [];
        switch(val) {
      case STATUS.OPEN:
        returnArr.push('bg-green-500', 'font-bold', 'text-white', 'border-gray-900')
        break;
      case STATUS.CLOSED:
        returnArr.push('bg-gray-900', 'font-bold', 'text-white', 'border-gray-700')
        break;
      case STATUS.RESERVED:
        returnArr.push('bg-red-900', 'font-bold', 'text-white', 'border-gray-900')
        break;
      case STATUS.PENDING:
        returnArr.push('bg-blue-900', 'font-bold', 'text-white', 'border-gray-900')
        break; 
    }  
    return returnArr;

  }

}



 