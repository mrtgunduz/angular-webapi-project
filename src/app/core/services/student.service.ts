import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { StudentTypes } from '../models/student.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

baseApiUrl: string = 'https://localhost:7221'

  getStudents(): Observable<StudentTypes[]>{
    return this.httpClient.get<StudentTypes[]>(this.baseApiUrl + '/Students');
  }


  getStudent(studentTypesId: String | null):Observable<StudentTypes> {
    return this.httpClient.get<StudentTypes>(this.baseApiUrl + '/students/' + studentTypesId);
  }
}
