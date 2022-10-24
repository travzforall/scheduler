import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  getSessionsByDay(roomNumber: any, day: DateTime) {

    // const formattedDate = day.getFullYear() +'-' + (day.getMonth()+1) + '-'+ (day.getDate()+1);
    return this.http.get(`https://x8ki-letl-twmt.n7.xano.io/api:QwAjcaej/schedule_by_date/${roomNumber}/${day.toISODate()}`);
  }

  constructor(protected http: HttpClient) { }

  postRequest(req: any) {
    console.log(req)
    return this.http.post('https://x8ki-letl-twmt.n7.xano.io/api:QwAjcaej/request', req);
  }

  

}
