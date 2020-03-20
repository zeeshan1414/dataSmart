import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportNavComponent } from './support-nav.component';

describe('SupportNavComponent', () => {
  let component: SupportNavComponent;
  let fixture: ComponentFixture<SupportNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
