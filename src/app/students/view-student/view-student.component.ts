import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, throwError } from 'rxjs';
import { Gender, StudentTypes } from 'src/app/core/models/student.model';
import { GenderService } from 'src/app/core/services/gender-service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss'],
})
export class ViewStudentComponent {
  studentTypesId?: string | null;
  genderList: Gender[] = []
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
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private genderService: GenderService,
    private toastr:ToastrService
  ) {}

  ngOnInit() {
    this.getStudentDetails();
    this.getGenderDetails();
  }

  getStudentDetails() {
    this.route.paramMap.subscribe((params) => {
      debugger;
      this.studentTypesId = params.get('id');
      this.studentService
        .getStudent(this.studentTypesId)
        .subscribe((data) => {
          this.student = data;

        });
    });
  }

  getGenderDetails(){
    this.genderService.getGendersList().subscribe((data) => {
      this.genderList = data;
    })
  }

  updateStudent(){
   this.studentService.getStudentUpdate(this.studentTypesId,this.student)
  .subscribe((data) => {
    if(data !== null) {
    this.toastr.success('Student Updated Successfully');
    }
    this.student = data;
    console.log(data);

   })
  }
}
