import { Component, OnInit } from '@angular/core';
import { StudentService } from '../core/services/student.service';
import { Student } from '../core/apimodels/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private _studentService: StudentService) {}
  student!:Student[];

  ngOnInit(): void {
    debugger;
    this._studentService.getStudent().subscribe(
      (success) => {
        this.student = success;
        console.log(success);
      },
    );
  }

  getStudents() {}
}
