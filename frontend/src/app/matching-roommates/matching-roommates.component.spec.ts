import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingRoommatesComponent } from './matching-roommates.component';

describe('MatchingRoommatesComponent', () => {
  let component: MatchingRoommatesComponent;
  let fixture: ComponentFixture<MatchingRoommatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingRoommatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchingRoommatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
