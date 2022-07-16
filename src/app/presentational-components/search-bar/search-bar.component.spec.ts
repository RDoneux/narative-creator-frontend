import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test defalut values', () => {
    expect(component.value).toBeUndefined();
    expect(component.placeholder).toEqual('');
    expect(component.isLoading).toBeFalse();
    expect(component.searchAsType).toBeFalse();
  });

  describe('submitted', () => {
    it('should not emit value if value is empty', () => {
      spyOn(component, 'submitted').and.callThrough();
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.submitted).not.toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();

      component.value = '';

      component.submitted();

      expect(component.submitted).toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should not emit value if value is undefined', () => {
      spyOn(component, 'submitted').and.callThrough();
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.submitted).not.toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();

      component.value = undefined;

      component.submitted();

      expect(component.submitted).toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should not emit value if component is loading', () => {
      spyOn(component, 'submitted').and.callThrough();
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.submitted).not.toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();

      component.value = 'test-value';
      component.isLoading = true;

      component.submitted();

      expect(component.submitted).toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should emit value if component is not loading and value is truthy', () => {
      const testValue = 'test-value';

      spyOn(component, 'submitted').and.callThrough();
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.submitted).not.toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();

      component.value = testValue;
      component.isLoading = false;

      component.submitted();

      expect(component.submitted).toHaveBeenCalled();
      expect(component.changed.emit).toHaveBeenCalledOnceWith(testValue);
    });
  });
  describe('onChange', () => {
    const testValue = 'test-value';
    it('should not submit value if event is not defined', () => {
      spyOn(component, 'onChange').and.callThrough();
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.onChange).not.toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();

      component.searchAsType = true;
      component.isLoading = false;

      component.onChange('');

      expect(component.onChange).toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should not submit value if component is loading', () => {
      spyOn(component, 'onChange').and.callThrough();
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.onChange).not.toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();

      component.searchAsType = true;
      component.isLoading = true;

      component.onChange(testValue);

      expect(component.onChange).toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should not submit value if submit on type is false', () => {
      spyOn(component, 'onChange').and.callThrough();
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.onChange).not.toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();

      component.searchAsType = false;
      component.isLoading = false;

      component.onChange(testValue);

      expect(component.onChange).toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should submit value if submit on type is true, component is not loading and event is truthy', () => {
      setTimeout(() => {}, 1000);

      spyOn(component, 'onChange').and.callThrough();
      spyOn(component.changed, 'emit').and.callThrough();

      expect(component.onChange).not.toHaveBeenCalled();
      expect(component.changed.emit).not.toHaveBeenCalled();

      component.searchAsType = true;
      component.isLoading = false;

      component.onChange(testValue);

      expect(component.changed.emit).toHaveBeenCalled();
      expect(component.changed.emit).toHaveBeenCalledOnceWith(testValue);
    });
  });
  describe('debounce', () => {
    const testValue = 'test-value';
    it('should debounce onChange method', () => {
      spyOn(component.changed, 'emit');

      expect(component.changed.emit).not.toHaveBeenCalled();

      component.searchAsType = true;
      component.isLoading = false;
      component.onChange(testValue);

      expect(component.changed.emit).toHaveBeenCalledOnceWith(testValue);

      component.debounceOnChange(1000);

      for (var i = 0; i < 100; i++) {
        component.onChange(testValue);
      }

      expect(component.changed.emit).toHaveBeenCalledOnceWith(testValue);
    });
  });
});
