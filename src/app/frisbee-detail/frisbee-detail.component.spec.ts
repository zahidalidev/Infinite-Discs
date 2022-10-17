import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { FrisbeeDetailComponent } from './frisbee-detail.component'

describe('FrisbeeDetailComponent', () => {
  let component: FrisbeeDetailComponent
  let fixture: ComponentFixture<FrisbeeDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrisbeeDetailComponent],
      imports: [RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(FrisbeeDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have back button', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('button')
    expect(button?.textContent).toContain('Go back')
  })

  it('should have heading', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1')
    expect(h1?.textContent).toContain('Infinite Discs')
  })

  it('should have image', () => {
    const img: HTMLElement = fixture.nativeElement.querySelector('img')
    expect(img).toBeTruthy()
  })
})
