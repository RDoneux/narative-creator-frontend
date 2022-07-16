import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterThumbnailComponent } from './character-thumbnail.component';

describe('CharacterThumbnailComponent', () => {
  let component: CharacterThumbnailComponent;
  let fixture: ComponentFixture<CharacterThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('default values', () => {
    it('should test default component values', () => {
      expect(component.source).toBeUndefined();
      expect(component.altText).toEqual('Image not found');
      expect(component.position).toBeUndefined();
      expect(component.width).toBeUndefined();
      expect(component.height).toBeUndefined();
    })
  })

  describe('emitted values', () => {
    it('should test button clicked emitted value', () => {

      const event = new Event("");

      spyOn(component, 'onButtonClick').and.callThrough();
      spyOn(component.buttonClicked, 'emit');

      expect(component.onButtonClick).not.toHaveBeenCalled();
      expect(component.buttonClicked.emit).not.toHaveBeenCalled();

      component.onButtonClick(event);

      expect(component.onButtonClick).toHaveBeenCalledOnceWith(event);
      expect(component.buttonClicked.emit).toHaveBeenCalledTimes(1);
    })
  })
});
