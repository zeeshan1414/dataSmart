import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { SupportComponent } from './support/support.component';
import { StudentComponent } from './student/student.component';
import { GradesComponent } from './grades/grades.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { PublishersComponent } from './publishers/publishers.component';
import { EdtechPartnersComponent } from './edtech-partners/edtech-partners.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'grades',
    component: GradesComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'publishers',
    component: PublishersComponent
  },
  {
    path: 'edtech-partners',
    component: EdtechPartnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
