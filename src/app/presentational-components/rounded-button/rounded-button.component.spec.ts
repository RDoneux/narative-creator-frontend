import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedButtonComponent } from './rounded-button.component';

describe('RoundedButtonComponent', () => {
  let component: RoundedButtonComponent;
  let fixture: ComponentFixture<RoundedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click event on click', () => {
    const buttonSpy = spyOn(component.clicked, 'emit');

    const testClickEvent = new Event('click');

    component.onClick(testClickEvent);

    expect(buttonSpy).toHaveBeenCalledOnceWith(testClickEvent);

  })
});
