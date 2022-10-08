import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  date: string;
  start: string;
  duration: string;
  end: string;
  purpose: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
  {date: '10-05-2022', name: '031 Classroom', start: '9:30', duration: '1 hour', end: '10:30', purpose: 'Class'},
];

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;


  constructor() {
   }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['date', 'name', 'start', 'duration', 'end', 'purpose', 'options'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

 
}




 