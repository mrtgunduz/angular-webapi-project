import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss'],
})
export class ViewStudentComponent {
  studentId?: string | null;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(

      (params) => {
      this.studentId = params.get('id');
      this.studentService.getStudent(this.studentId).subscribe(
        (res) => {
      debugger;
        }
      )
    }


    );
  }
}
