import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContractAddComponent } from './service-contract-add.component';

describe('ServiceContractAddComponent', () => {
  let component: ServiceContractAddComponent;
  let fixture: ComponentFixture<ServiceContractAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceContractAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceContractAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
