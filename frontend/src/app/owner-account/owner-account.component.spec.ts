import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAccountComponent } from './owner-account.component';

describe('OwnerAccountComponent', () => {
  let component: OwnerAccountComponent;
  let fixture: ComponentFixture<OwnerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
