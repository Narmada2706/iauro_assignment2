import { StudentDataService } from './../student-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  studentDetails: any[] = [];
  constructor(private studentData : StudentDataService)
  {

  }
  ngOnInit(): void {
   
    this.studentDetails = this.studentData.getstudentlist();
    console.log("this.studentDetails",this.studentDetails);
    
  }

}
