import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second_task';
  pageNo: any;
  buttonclicked(index: any){
    console.log("index");
    this.pageNo = index;
  }
}
