import { By } from '@angular/platform-browser'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FrisbeeListComponent } from './frisbee-list.component'

describe('FrisbeeListComponent', () => {
  let component: FrisbeeListComponent
  let fixture: ComponentFixture<FrisbeeListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrisbeeListComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FrisbeeListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have heading', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h1')
    expect(h2).toBeTruthy()
  })

  it('should have description', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('p')
    expect(h2).toBeTruthy()
  })

  it('should have category heading', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h6')
    expect(h2).toBeTruthy()
  })

  it('should have frisbee component', () => {
    const h2 = fixture.debugElement.query(By.css('[data-testid="app-frisbee"]'))
    expect(h2).toBeTruthy()
  })

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Infinite Discs'
    )
  })
})
