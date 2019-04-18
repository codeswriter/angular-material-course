import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseTrainingComponent } from './pause-training.component';

describe('PauseTrainingComponent', () => {
  let component: PauseTrainingComponent;
  let fixture: ComponentFixture<PauseTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PauseTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
