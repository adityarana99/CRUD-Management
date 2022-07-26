import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Entities/Student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly JavaUrl: string = `http://localhost:8080/`;

  constructor(private http: HttpClient) { }

  
  getStudentList():Observable<Student[]>{
    return this.http.get<any>(`${this.JavaUrl}` + "getStudent");  // "getStudent" is from java controller code
  }

  addStudentDetails(val:any){
    return this.http.post(`${this.JavaUrl}` + "addStudent", val);
  }


}
