import { Component, OnInit } from '@angular/core';
import { STATUS } from '../view-room/view-room.component';

@Component({
  selector: 'app-open-dialog-room',
  templateUrl: './open-dialog-room.component.html',
  styleUrls: ['./open-dialog-room.component.scss']
})
export class OpenDialogRoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  time = [
    {name: '09:00', status: STATUS.OPEN},
    {name: '09:15', status: STATUS.PENDING},
    {name: '09:30', status: STATUS.PENDING},
    {name: '09:45', status: STATUS.RESERVED}, 
    {name: '10:00', status: STATUS.RESERVED},
    {name: '10:15', status: STATUS.OPEN},
    {name: '10:30', status: STATUS.CLOSED},
    {name: '10:45', status: STATUS.CLOSED}, 
    {name: '11:00', status: STATUS.CLOSED},
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

}
