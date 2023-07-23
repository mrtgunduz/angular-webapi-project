import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent},
  { path: '', redirectTo: '/students', pathMatch: 'full' },

  {
    path: 'students/:id',
    component: ViewStudentComponent,
  },
  {
    path: 'students/add',
    component: ViewStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
