import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResourcesComponent } from './resources/resources.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SupportComponent } from './support/support.component';
import { SupportNavComponent } from './support-nav/support-nav.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { StudentComponent } from './student/student.component';
import { GradesComponent } from './grades/grades.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { PublishersComponent } from './publishers/publishers.component';
import { EdtechPartnersComponent } from './edtech-partners/edtech-partners.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResourcesComponent,
    SidenavComponent,
    SupportComponent,
    SupportNavComponent,
    ContactFormComponent,
    StudentComponent,
    GradesComponent,
    SubjectsComponent,
    PublishersComponent,
    EdtechPartnersComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
