import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feemanager',
  templateUrl: './feemanager.component.html',
  styleUrls: ['./feemanager.component.css']
})
export class FeemanagerComponent {

 public studentsData: {studentname:string, balance: number}[] =[]
  studentname: string | undefined;
  balance: number | undefined
  
  addStudent(studentname: string, balance: number){

    // console.log(`this is ${studentname.value} and ${balance.value}`)
    this.studentsData.push({studentname, balance})
    console.log(this.studentsData);
    
  }


  constructor() { }

}
