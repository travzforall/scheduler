import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.scss']
})
export class ImageMapComponent implements OnInit {


  @Input()
  src: string = ""

  @Input()
  coordinates: ImageMapCoordinate[] = [];

  @Input()
  canEdit: boolean = false;

  @Input()
  activeRooms: number[] = [];

  @Output('onClick')
  onClick: EventEmitter<ImageMapCoordinate> = new EventEmitter();

  constructor() { }

  ngOnInit() { 
   }

  getCoordinateStyle(coordinate: any): object {  
    return {
      top: `${coordinate.y}px`,
      left: `${coordinate.x}px`,
      height: `${coordinate.height}px`,
      width: `${coordinate.width}px`,
      background: this.isActive(coordinate.id)?  'rgba(255, 0, 0, 0.50)': 'rgba(0, 255, 0, 0.50)'
    };
  }

  onAreaClick(coordinate: any) {
    this.onClick.emit(coordinate);
  }


  isActive(room: any) {
    return this.activeRooms.includes(room)
  }

  onAreaContext(e: MouseEvent, coordinate: ImageMapCoordinate) {
    if(this.canEdit)
    {
      if(coordinate) {
        console.log('editing')

      }
      else {
        console.log('creating')
      }
    
      e.stopPropagation();
      return false;
    } 

    return;
  }

  onAreaCreate(x: number, y: number): ImageMapCoordinate {
    const coordinate = new ImageMapCoordinate({x, y, width: 100, height: 100});
    console.log(coordinate)
    return coordinate
  }

  onAreaEdit(coordinate: ImageMapCoordinate): ImageMapCoordinate {
    return coordinate;
  }


}



export class ImageMapCoordinate {
  x: number = 0
  y: number = 0
  width: number = 100
  height: number = 100
  room_type?: string
  room?: number

  constructor(init?: Partial<ImageMapCoordinate>) {
    Object.assign(this, init);
  }
}