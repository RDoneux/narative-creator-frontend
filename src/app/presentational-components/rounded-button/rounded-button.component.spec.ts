import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedButtonComponent } from './rounded-button.component';

describe('RoundedButtonComponent', () => {
  let component: RoundedButtonComponent;
  let fixture: ComponentFixture<RoundedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundedButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test default values', () => {
    expect(component.isLoading).toBeFalse();
  })

  it('should emit click event on click', () => {
    const testClickEvent = new Event('');

    spyOn(component.clicked, 'emit').and.callThrough();
    spyOn(component, 'onClick').and.callThrough();

    expect(component.onClick).not.toHaveBeenCalled();
    expect(component.clicked.emit).not.toHaveBeenCalled();

    component.onClick(testClickEvent);

    expect(component.onClick).toHaveBeenCalledOnceWith(testClickEvent);
  });
});
