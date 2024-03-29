import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { StudentTypes } from '../models/student.model';
import { UpdateStudentRequest } from '../models/updatestudent-model';
import { AddStudentRequest } from '../models/addstudent-model';


@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

baseApiUrl: string = 'https://localhost:7221'
body:any

  getStudents(): Observable<StudentTypes[]>{
    return this.httpClient.get<StudentTypes[]>(this.baseApiUrl + '/Students');
  }


  getStudent(studentTypesId: String | null):Observable<StudentTypes> {
    return this.httpClient.get<StudentTypes>(this.baseApiUrl + '/students/' + studentTypesId);
  }

getStudentUpdate(studentTypesId: String | null | undefined,studentRequest:StudentTypes){
  const updateStudentRequest : UpdateStudentRequest = {
    firstName: studentRequest.firstName,
    lastName: studentRequest.lastName,
    dateOfBirth: studentRequest.dateOfBirth,
    email: studentRequest.email,
    mobile: studentRequest.mobile,
    genderId: studentRequest.genderId,
    physicalAdress: studentRequest.address.physicalAddress,
    postalAdress: studentRequest.address.postalAddress

  }
  return this.httpClient.put<StudentTypes>(this.baseApiUrl + '/students/' + studentTypesId , updateStudentRequest);
}

deleteStudent(studentTypesId:string | null | undefined):Observable<StudentTypes> {
return this.httpClient.delete<StudentTypes>(this.baseApiUrl + '/students/' + studentTypesId);
}

addStudent(studentTypesId: String | null | undefined,studentRequest:StudentTypes){
  const addStudentRequest : AddStudentRequest = {
    firstName: studentRequest.firstName,
    lastName: studentRequest.lastName,
    dateOfBirth: studentRequest.dateOfBirth,
    email: studentRequest.email,
    mobile: studentRequest.mobile,
    genderId: studentRequest.genderId,
    physicalAdress: studentRequest.address.physicalAddress,
    postalAdress: studentRequest.address.postalAddress

  }
  return this.httpClient.post<StudentTypes>(this.baseApiUrl + '/students/' + studentTypesId , addStudentRequest);
}

getImagePath(relativePath:string){
  return `${this.baseApiUrl}/${relativePath}`;
}


uploadImage(studentTypesId: String | null | undefined,file:File):Observable<any>
{

  let formData:FormData = new FormData();
  formData.append('profileImage',file)
  return this.httpClient.post<StudentTypes>(this.baseApiUrl + '/students/' + studentTypesId+ '/upload-image', formData , {responseType : 'text' as 'json'});
}



}
