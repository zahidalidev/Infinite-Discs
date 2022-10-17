import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisbeeListComponent } from './frisbee-list.component';

describe('FrisbeeListComponent', () => {
  let component: FrisbeeListComponent;
  let fixture: ComponentFixture<FrisbeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrisbeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrisbeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
