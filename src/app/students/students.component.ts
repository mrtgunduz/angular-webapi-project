import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../core/services/student.service';
import { Student } from '../core/apimodels/student';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private _studentService: StudentService) {}
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth','email','mobile','gender'];
  dataSource:MatTableDataSource<Student> = new MatTableDataSource<Student>();
  students: Student[] = [];
  @ViewChild(MatPaginator) paginator! : MatPaginator

  ngOnInit(): void {
    this._studentService.getStudent().subscribe(
      (res) => {
        this.students = res;
        this.dataSource =new MatTableDataSource<Student>(this.students);
        this.dataSource.paginator = this.paginator;
      }
    )
  }
}
