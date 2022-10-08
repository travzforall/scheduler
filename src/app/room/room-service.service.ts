import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor(protected http: HttpClient) { }

  postRequest(req: any) {
    console.log(req)
    return this.http.get('https://x8ki-letl-twmt.n7.xano.io/api:QwAjcaej/request');
  }

  

}
