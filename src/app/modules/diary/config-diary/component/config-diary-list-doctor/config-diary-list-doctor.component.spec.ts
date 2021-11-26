import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDiaryListDoctorComponent } from './config-diary-list-doctor.component';

describe('ConfigDiaryListDoctorComponent', () => {
  let component: ConfigDiaryListDoctorComponent;
  let fixture: ComponentFixture<ConfigDiaryListDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDiaryListDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDiaryListDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
