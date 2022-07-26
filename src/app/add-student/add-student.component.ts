import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from '../Entities/Student';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private service: ApiService, private fb: FormBuilder) { }


  addForm = this.fb.group({
    FirstName: ['', [Validators.required, Validators.pattern('[a-z A-Z]*')]],
    LastName: ['', [Validators.required, Validators.pattern('[a-z A-Z]*')]],
    Gender: ['', Validators.required],
    Department: ['', Validators.required]
  })

  ngOnInit(): void {
  }


  Gender: string

  values(e){
    this.Gender = e.target.value
  }


  Department: string

  onChangeDepartment(d){
    this.Department = d.target.value
  }


  addStudent(){
    var val = {
      studentId: this.student.StudentId,
      firstName: this.student.FirstName,
      lastName: this.student.LastName,
      gender: this.Gender,
      department: this.Department
    };
    this.service.addStudentDetails(val).subscribe(res => {
      alert(res.valueOf());
    });
  }


}
