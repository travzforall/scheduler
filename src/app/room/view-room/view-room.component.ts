import { Component, OnInit } from '@angular/core';

export enum STATUS {
  OPEN = "Open",
  RESERVED = "Reserved",
  CLOSED = "Closed",
  PENDING = "Pending",
}


@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.scss']
})
export class ViewRoomComponent implements OnInit {

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

  getClassOf(val: string) {

    switch(val) {
      case STATUS.OPEN:
        return ['bg-green-400', 'font-bold', 'text-green-900', 'border-green-900']
      case STATUS.CLOSED:
        return ['bg-gray-900', 'font-bold', 'text-white', 'border-gray-700']
      case STATUS.RESERVED:
        return ['bg-red-900', 'font-bold', 'text-white', 'border-gray-900']
      case STATUS.PENDING:
        return ['bg-blue-900', 'font-bold', 'text-white', 'border-gray-900']
      
      default:
        return ['bg-orange-400', 'font-bold']
                    
    } 

  }

}



