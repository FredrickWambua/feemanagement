import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';



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

  

  studentsData: Student [] =[]
  data: Student[] =[] 
  addStudent(studentname: string, balance: number){
      if(!studentname.trim()){
        const hasname = document.querySelector('.hasname') as HTMLElement
        hasname.style.display = 'block'
        setTimeout(()=>{
          return hasname.style.display = 'none'
        },5000)
      } else{       
        this.studentsData.push({studentname, balance})
      }
    return this.data = this.studentsData
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
      if(student.balance >0){
        return student

      }   
    })
  }
  
  


  



  constructor() {
   }

}
