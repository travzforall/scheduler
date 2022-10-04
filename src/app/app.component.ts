import { Component } from '@angular/core';
import { ImageMapCoordinate } from './feature/image-map/image-map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scheduler';


  name = 'Angular';
  image: string = 'assets/images/Screen Shot 2022-10-03 at 9.43.08 PM.png'
  coordinates: ImageMapCoordinate[] = [
    {
      name: "031 Men\'s Bathroom ",
      x: 670,
      y: 300,
      width: 171,
      height: 70
    },
    {
      name: "031 Women\'s Bathroom ",
      x: 840,
      y: 300,
      width: 122,
      height: 75
    },
    {
      name: '007 Office',
      x: 138,
      y: 550,
      width: 87,
      height: 92
    },
    {
      name: '006 Office',
      x: 138,
      y: 497,
      width: 87,
      height: 55
    },
    {
      name: '003 Register',
      x: 70,
      y: 387,
      width: 155,
      height: 110
    },
    {
      name: '005 Office',
      x: 70,
      y: 437,
      width: 77,
      height:  60
    },
    {
      name: '004 Office',
      x: 0,
      y: 387,
      width: 70,
      height: 110
    },
    {
      name: '018 The Market',
      x: 0,
      y: 275,
      width: 77,
      height: 115
    },
    {
      name: '009 Office',
      x: 0,
      y: 225,
      width: 77,
      height: 50
    },
    {
      name: '008 Student Financial Services',
      x: 0,
      y: 0,
      width: 165,
      height: 225
    },
    {
      name: '011 Computer Lab',
      x: 165,
      y: 0,
      width: 123,
      height: 210
    },
    {
      name: '012 Classroom',
      x: 286,
      y: 0,
      width: 157,
      height: 151
    },   
    {
      name: '014 Classroom',
      x: 441,
      y: 0,
      width: 125,
      height: 260
    },   
    {
      name: '015 Classroom',
      x: 565,
      y: 0,
      width: 142,
      height: 260
    },   
    {
      name: '016 Classroom',
      x: 705,
      y: 0,
      width: 142,
      height: 260
    },   
    {
      name: '016 Classroom',
      x: 846,
      y: 0,
      width: 155,
      height: 260
    }

  ]

  showImage: boolean = false;

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`)
  }

  

  console(data: any) {
  console.log(data)
  }

  auto_parts = [{
    "shape": "circle",
    "type": "kolo_przod",
    "coords": "193,342,68"
  }, {
    "shape": "circle",
    "type": "kolo_tyl",
    "coords": "743,341,68"
  }, {
    "shape": "poly",
    "type": "okno",
    "coords": "380,220,494,213,512,149,452,157,421,165,369,192,384,199"
  }, {
    "shape": "poly",
    "type": "okno",
    "coords": "536,211,692,202,700,173,664,162,599,152,544,149"
  }, {
    "shape": "poly",
    "type": "drzwi",
    "coords": "301,355,510,354,504,334,510,236,516,213,528,144,462,149,419,162,361,190,300,231,293,253,292,312"
  }, {
    "shape": "poly",
    "type": "drzwi",
    "coords": "510,352,632,349,702,252,712,211,708,202,716,176,657,156,586,145,528,145,516,213,510,235,504,333"
  }]
  
  partClicked(type: any) {
     alert(type + ' clicked');
  }
}
