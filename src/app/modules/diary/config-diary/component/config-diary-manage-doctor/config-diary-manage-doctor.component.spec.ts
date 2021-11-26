import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDiaryManageDoctorComponent } from './config-diary-manage-doctor.component';

describe('ConfigDiaryManageDoctorComponent', () => {
  let component: ConfigDiaryManageDoctorComponent;
  let fixture: ComponentFixture<ConfigDiaryManageDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDiaryManageDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDiaryManageDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
