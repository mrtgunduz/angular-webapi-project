import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Student } from '../apimodels/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  baseApiUrl = 'https://localhost:7221';

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseApiUrl + '/Students');
  }

  getStudent(studentId: String | null) {
    return this.httpClient.get<Student>(this.baseApiUrl + '/students/' + studentId);
  }
}
