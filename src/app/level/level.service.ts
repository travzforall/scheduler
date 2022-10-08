import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageMapCoordinate } from '../feature/image-map/image-map.component';


@Injectable({
  providedIn: 'root'
})
export class LevelService {


  postDummy(coordinates: ImageMapCoordinate[]) {
  //  var i = 0 ;
 

  //     const interval = setInterval(() => {
  //       i=i+1
  //       if (i > coordinates.length-1) {
  //         clearInterval(interval)
  //         return;
  //       }
  //       this.http.post('https://x8ki-letl-twmt.n7.xano.io/api:QwAjcaej/image_map', coordinates[i]).subscribe(e => {
  //         console.log(i, coordinates.length)
  //       }) 

    

  //     }, 3000) 
  } 

  constructor(protected http: HttpClient) { }

  getLevels() {
    return this.http.get('https://x8ki-letl-twmt.n7.xano.io/api:QwAjcaej/level');
  }

  getLevel(id: number) {
    return this.http.get(`https://x8ki-letl-twmt.n7.xano.io/api:QwAjcaej/level/${id}`);
  }


  getLevelState(id: number, date: string, time: string) {
    return this.http.get(`https://x8ki-letl-twmt.n7.xano.io/api:QwAjcaej/level/${id}/${date}/${time}`);
  }
  
  

}
