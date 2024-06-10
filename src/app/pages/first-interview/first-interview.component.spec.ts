import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInterviewComponent } from './first-interview.component';

describe('FirstInterviewComponent', () => {
  let component: FirstInterviewComponent;
  let fixture: ComponentFixture<FirstInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstInterviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
