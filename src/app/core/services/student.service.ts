import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private httpClient:HttpClient) { }

baseApiUrl = 'https://localhost:7221';

getStudent():Observable<any>{
return this.httpClient.get<any>(this.baseApiUrl+'/Students');
}
}
