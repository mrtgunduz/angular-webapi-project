import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../core/services/student.service';
import { Student } from '../core/models/student.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(private _studentService: StudentService) {}
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'email',
    'mobile',
    'gender',
    'edit',
  ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  students: Student[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterString = '';

  ngOnInit(): void {

    this._studentService.getStudents().subscribe((res) => {
      this.students = res;
      console.log(res);
      this.dataSource = new MatTableDataSource<Student>(this.students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filterStudents() {
    debugger;
   this.dataSource.filter = this.filterString.trim().toLocaleLowerCase();

  }
}
