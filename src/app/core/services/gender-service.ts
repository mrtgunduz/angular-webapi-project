import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Gender } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService implements OnInit {

constructor(private http:HttpClient) { }


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}


baseApiUrl: string = 'https://localhost:7221'

getGendersList(){
  return this.http.get<Gender[]>(this.baseApiUrl + '/Genders');
}


}
