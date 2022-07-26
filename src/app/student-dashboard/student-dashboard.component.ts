import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private service: ApiService) { 
    for(let i = 1; i <= 100; i++){
      this.StudentList.push(`item ${i}`);
    }
   }

  ModalTitle: string;
  ActivateAddStudentComponent: boolean=false;
   
  ngOnInit(): void {
    this.newStudentList();
  }



  StudentList:any=[];
  totalLength:any;
  page:number=1;

  newStudentList(){
    this.service.getStudentList().subscribe(data=>{
      this.StudentList=data;

      this.totalLength = data.length;
    })
  }

  addClick(){
    this.ModalTitle="Add Student";
    this.ActivateAddStudentComponent=true;
  }

  closeClick(){
    this.ActivateAddStudentComponent=false;
  }
  
}
