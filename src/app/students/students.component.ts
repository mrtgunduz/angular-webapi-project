import { Component, OnInit } from '@angular/core';
import { StudentService } from '../core/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this._studentService.getStudent().subscribe((res) => {
      res = res.any;
    });
  }
}
