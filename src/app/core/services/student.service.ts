import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../apimodels/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private httpClient:HttpClient) { }

baseApiUrl = 'https://localhost:7221';

getStudent():Observable<Student[]>{
return this.httpClient.get<Student[]>(this.baseApiUrl+'/Students');
}
}
