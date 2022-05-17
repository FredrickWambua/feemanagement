import { Component, OnInit } from '@angular/core';



interface Student {
  studentname: string
  balance: number
}

@Component({
  selector: 'app-feemanager',
  templateUrl: './feemanager.component.html',
  styleUrls: ['./feemanager.component.css']
})

export class FeemanagerComponent {


  // formulating data from form
  studentsData: Student [] =[]
  data: Student[] =[] 
  
  addStudent(studentname: string, balance: number){
    this.studentsData.push({studentname, balance})
    
  }
  getAllStudents(){
    return this.data = this.studentsData
  }

  getWithBalance(){
    this.data = this.studentsData.filter((student):any=>{
      if(student.balance<0){
        return student        
      }      
    })
  }

  getWithoutBalance(){
    this.data = this.studentsData.filter((student): any=>{
      if(student.balance > 0){
        return student

      }   
    })
  }
  
  


  



  constructor() {
   }

}
