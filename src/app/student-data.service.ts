import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  
 name:string | undefined;
 year: string | undefined;
 cgpa :number | undefined;

  constructor() { }
  getstudentlist(): { name: string; year: string; cgpa: number; }[]
  {
    return [
      {name:'Narmada Ugale', year:'Final year',cgpa:8.7},
      {name:'Sakshi Mahakalkar',year:'Final year',cgpa:8.0},
      {name:'Sanklap Mohte',year:'Final year',cgpa:8.5},
      {name:'Kajol Rathod',year:'Final year',cgpa:8.75},
      {name:'Shradha Tathte',year:'Final year',cgpa:8.6},
      

    ]
  }
}
