import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the app', () => {
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have as title "infinitediscs"', () => {
    const app = fixture.componentInstance
    expect(app.title).toEqual('infinitediscs')
  })

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement
    const p = compiled.querySelector('p')
    expect(p?.textContent).toContain(
      'Welcome to Infinite Discs'
    )
  })
})
