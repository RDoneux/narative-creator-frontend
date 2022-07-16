import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test default values', () => {
    expect(component.label).toBeUndefined();
    expect(component.checked).toBeFalse();
  });

  describe('toggle component', () => {
    it('should set checked to correct value on toggle', () => {
      spyOn(component, 'toggleComponent').and.callThrough();

      expect(component.checked).toBeFalse();
      expect(component.toggleComponent).not.toHaveBeenCalled();

      component.toggleComponent();

      expect(component.toggleComponent).toHaveBeenCalledTimes(1);
      expect(component.checked).toBeTrue();
    });
    it('should emit correct value on toggle component', () => {
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.checked).toBeFalse();

      component.toggleComponent();

      expect(component.changed.emit).toHaveBeenCalledOnceWith(
        component.checked
      );
    });
  });
});
