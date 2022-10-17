import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisbeeDetailComponent } from './frisbee-detail.component';

describe('FrisbeeDetailComponent', () => {
  let component: FrisbeeDetailComponent;
  let fixture: ComponentFixture<FrisbeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrisbeeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrisbeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
