import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtechPartnersComponent } from './edtech-partners.component';

describe('EdtechPartnersComponent', () => {
  let component: EdtechPartnersComponent;
  let fixture: ComponentFixture<EdtechPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtechPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtechPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
