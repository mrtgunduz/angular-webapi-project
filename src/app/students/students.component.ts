import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../core/services/student.service';
import { StudentTypes } from '../core/models/student.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddStudentRequest } from '../core/models/addstudent-model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private _studentService: StudentService) {
  }
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'email',
    'mobile',
    'gender',
    'edit',
  ];
  studentTypesId?: string | null | undefined;

  dataSource: MatTableDataSource<StudentTypes> = new MatTableDataSource<StudentTypes>();
  students: StudentTypes[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterString = '';

  ngOnInit(): void {

    this._studentService.getStudents().subscribe((res) => {
      this.students = res;
      console.log(res);
      this.dataSource = new MatTableDataSource<StudentTypes>(this.students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filterStudents() {
    ;
   this.dataSource.filter = this.filterString.trim().toLocaleLowerCase();

  }


}
