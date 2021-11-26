import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDiaryComponent } from './config-diary.component';

describe('ConfigDiaryComponent', () => {
  let component: ConfigDiaryComponent;
  let fixture: ComponentFixture<ConfigDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
