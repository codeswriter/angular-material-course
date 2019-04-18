import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTraininsComponent } from './past-trainins.component';

describe('PastTraininsComponent', () => {
  let component: PastTraininsComponent;
  let fixture: ComponentFixture<PastTraininsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTraininsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTraininsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
