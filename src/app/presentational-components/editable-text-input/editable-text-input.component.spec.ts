import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EditableTextInputComponent } from './editable-text-input.component';

describe('EditableTextInputComponent', () => {
  let component: EditableTextInputComponent;
  let fixture: ComponentFixture<EditableTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableTextInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have pre-defined values if none are set', () => {
    expect(component.placeholder).toEqual('');
    expect(component.value).toBeFalsy();
  });

  it('should emit the string value on change', () => {
    const testValue = "test-value"

    const handleContent = spyOn(component.valueChanged, 'emit');

    component.value = testValue
    component.handleContentChange();

    expect(handleContent).toHaveBeenCalledOnceWith(testValue);
  });

});
