import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, throwError } from 'rxjs';
import { AddStudentRequest } from 'src/app/core/models/addstudent-model';
import { Gender, StudentTypes } from 'src/app/core/models/student.model';
import { GenderService } from 'src/app/core/services/gender-service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss'],
})
export class ViewStudentComponent {





  students: StudentTypes[] = [];
  studentTypesId?: string | null | undefined;
  genderList: Gender[] = [];
  student: StudentTypes = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobile: 0,
    profileImageUrl: '',
    genderId: '',
    gender: {
      id: '',
      description: '',
    },
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: '',
      studentId: '',
    },
  };
  isNeWStudent: boolean =  false;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private genderService: GenderService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getStudentDetails();
    this.getGenderDetails();
  }

  getStudentDetails() {
    this.route.paramMap.subscribe((params) => {

      this.studentTypesId = params.get('id');
      //studenttypesıd add ise
       if(this.studentTypesId === "add") {
       this.isNeWStudent = true;
       } else {
        this.isNeWStudent = false;
       }

      this.studentService.getStudent(this.studentTypesId).subscribe((data) => {
        this.student = data;
      });
    });
  }

  getGenderDetails() {
    this.genderService.getGendersList().subscribe((data) => {
      this.genderList = data;
    });
  }

  updateStudent() {
    this.studentService
      .getStudentUpdate(this.studentTypesId, this.student)
      .subscribe((data) => {
        if (data !== null) {
          this.toastr.success('Student Updated Successfully');
          setTimeout(() => {
            this.router.navigateByUrl('students');
          }, 350);
        }
        this.student = data;
        console.log(data);
      });
  }

  deleteStudent(){
    debugger;
    this.studentService.deleteStudent(this.studentTypesId).subscribe((data) => {
   this.student = data;
   if (data !== null) {
    this.toastr.error('Student Deleted Successfully');
    setTimeout(() => {
      this.router.navigateByUrl('students');
    }, 350);
  }

    })
  }



  addStudent(){
    this.studentService.addStudent(this.studentTypesId,this.student).subscribe((res) => {
      debugger;
this.student = res;
    });
  }
}
