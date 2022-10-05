import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageMapCoordinate } from '../feature/image-map/image-map.component';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  title = 'scheduler';


  name = 'Angular';
  image: string = 'assets/images/Screen Shot 2022-10-03 at 9.43.08 PM.png'
  coordinates: ImageMapCoordinate[] = [
    {
      room_number: "031",
      room_type: "Bathroom ",
      x: 670,
      y: 300,
      width: 171,
      height: 70
    },
    {
      room_number: "032",
      room_type: "Bathroom ",
      x: 840,
      y: 300,
      width: 122,
      height: 75
    },
    {
      room_number: "007",
      room_type: 'Office',
      x: 138,
      y: 550,
      width: 87,
      height: 92
    },
    {
      room_number: "006",
      room_type: 'Office',
      x: 138,
      y: 497,
      width: 87,
      height: 55
    },
    {
      room_number: "003",
      room_type: 'Register',
      x: 70,
      y: 387,
      width: 155,
      height: 110
    },
    {
      room_number: "005",
      room_type: 'Office',
      x: 70,
      y: 437,
      width: 77,
      height:  60
    },
    {
      room_number: "004",
      room_type: 'Office',
      x: 0,
      y: 387,
      width: 70,
      height: 110
    },
    {
      room_number: "018",
      room_type: 'The Market',
      x: 0,
      y: 275,
      width: 77,
      height: 115
    },
    {
      room_number: "009",
      room_type: 'Office',
      x: 0,
      y: 225,
      width: 77,
      height: 50
    },
    {
      room_number: "008",
      room_type: 'Student Financial Services',
      x: 0,
      y: 0,
      width: 165,
      height: 225
    },
    {
      room_number: "011",
      room_type: 'Computer Lab',
      x: 165,
      y: 0,
      width: 123,
      height: 210
    },
    {
      room_number: "012",
      room_type: 'Classroom',
      x: 286,
      y: 0,
      width: 157,
      height: 151
    },   
    {
      room_number: "014",
      room_type: 'Classroom',
      x: 441,
      y: 0,
      width: 125,
      height: 260
    },   
    {
      room_number: "015",
      room_type: 'Classroom',
      x: 565,
      y: 0,
      width: 142,
      height: 260
    },   
    {
      room_number: "016",
      room_type: 'Classroom',
      x: 705,
      y: 0,
      width: 142,
      height: 260
    },   
    {
      room_number: "017",
      room_type: 'Classroom',
      x: 846,
      y: 0,
      width: 155,
      height: 260
    }

  ]

  showImage: boolean = false;

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.room_type}`)
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


  goToRoom(room_number: any) {
    this.router.navigate(['room', room_number])
  }
}
