import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FrisbeeComponent } from './frisbee.component'

describe('FrisbeeComponent', () => {
  let component: FrisbeeComponent
  let fixture: ComponentFixture<FrisbeeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrisbeeComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FrisbeeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have image', () => {
    const img: HTMLElement = fixture.nativeElement.querySelector('img')
    expect(img).toBeTruthy()
  })

  it('should have heading', () => {
    const h6: HTMLElement = fixture.nativeElement.querySelector('h6')
    expect(h6).toBeTruthy()
  })

  it('should have anchor tag', () => {
    const a: HTMLElement = fixture.nativeElement.querySelector('a')
    expect(a).toBeTruthy()
  })

  it('anchor tag should have text "details"', () => {
    const compiled = fixture.nativeElement as HTMLElement
    const a = compiled.querySelector('a')
    expect(a?.textContent).toContain('Details')
  })
})
