import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterAccountComponent } from './renter-account.component';

describe('RenterAccountComponent', () => {
  let component: RenterAccountComponent;
  let fixture: ComponentFixture<RenterAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenterAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
