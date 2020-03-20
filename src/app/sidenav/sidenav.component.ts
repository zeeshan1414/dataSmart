import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  isGrade:boolean;
  isSubject:boolean;
  isAllResource:boolean = true;
  isEdtech:boolean;
  isPublisher:boolean;

  @Output() gradeEvent = new EventEmitter<boolean>();
  @Output() subjectEvent = new EventEmitter<boolean>();
  @Output() allResourceEvent = new EventEmitter<boolean>();
  @Output() edtechEvent = new EventEmitter<boolean>();
  @Output() publisherEvent = new EventEmitter<boolean>();

  setAllResource() {
    this.isAllResource = true;
    this.isGrade = false;
    this.isSubject = false;
    this.isEdtech = false;
    this.isPublisher = false;
    this.allResourceEvent.emit(this.isAllResource);
  }

  setEdtech() {
    this.isAllResource = false;
    this.isGrade = false;
    this.isSubject = false;
    this.isPublisher = false;
    this.isEdtech = true;
    this.edtechEvent.emit(this.isEdtech);
  }

  setPublishers() {
    this.isAllResource = false;
    this.isGrade = false;
    this.isSubject = false;
    this.isEdtech = false;
    this.isPublisher = true;
    this.publisherEvent.emit(this.isPublisher);
  }

  setSubjects() {
    this.isAllResource = false;
    this.isGrade = false;
    this.isEdtech = false;
    this.isPublisher = false;
    this.isSubject = true;
    this.subjectEvent.emit(this.isSubject);
  }
  
  setGrades() {
    this.isAllResource = false;
    this.isSubject = false;
    this.isEdtech = false;
    this.isPublisher = false;
    this.isGrade = true;
    this.gradeEvent.emit(this.isGrade);
  }

  ngOnInit(): void {
  }

}
