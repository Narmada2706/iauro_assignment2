import { StudentDataService } from './../student-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentList : any[] =[];
  constructor(private studentData : StudentDataService)
  {

  }
  ngOnInit(): void {
    this.studentList = this.studentData.getstudentlist();
    console.log("this.",this.studentList)
  }

}
