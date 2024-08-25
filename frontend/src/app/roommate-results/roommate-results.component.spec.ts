import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateResultsComponent } from './roommate-results.component';

describe('RoommateResultsComponent', () => {
  let component: RoommateResultsComponent;
  let fixture: ComponentFixture<RoommateResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoommateResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoommateResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
