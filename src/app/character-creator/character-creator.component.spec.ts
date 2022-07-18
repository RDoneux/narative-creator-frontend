import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorComponent } from './character-creator.component';

describe('CharacterCreatorComponent', () => {
  let component: CharacterCreatorComponent;
  let fixture: ComponentFixture<CharacterCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCreatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('modal control', () => {
    it('should close modal when method is called', () => {
      component.showModal = true;
      spyOn(component, 'onCloseModal').and.callThrough();

      expect(component.onCloseModal).not.toHaveBeenCalled();
      component.onCloseModal();
      expect(component.onCloseModal).toHaveBeenCalledTimes(1);
      expect(component.showModal).toBeFalse();
    });
    it('should open modal when method is called', () => {
      component.showModal = false;
      spyOn(component, 'onChangeCharacterThumbnail').and.callThrough();

      expect(component.onChangeCharacterThumbnail).not.toHaveBeenCalled();
      component.onChangeCharacterThumbnail(new Event(''));
      expect(component.onChangeCharacterThumbnail).toHaveBeenCalledTimes(1);
      expect(component.showModal).toBeTrue();
    });
    it('should set thumbnail url and close modal on method call', () => {
      const testUrl = 'test-url';

      expect(component.thumbNailUrl).toEqual('/assets/icons/male-default.jpg');

      component.showModal = true;
      spyOn(component, 'onCloseModal').and.callThrough();
      spyOn(component, 'onImageChanged').and.callThrough();

      expect(component.onCloseModal).not.toHaveBeenCalled();
      expect(component.onImageChanged).not.toHaveBeenCalled();
      component.onImageChanged(testUrl);

      expect(component.onCloseModal).toHaveBeenCalledTimes(1);
      expect(component.onImageChanged).toHaveBeenCalledOnceWith(testUrl);
      expect(component.thumbNailUrl).toEqual(testUrl);
    });
  });
  describe('stats changed', () => {
    it('should set stats equal to changed value', () => {
      const statsValue = [
        { label: 'Strength', abilityScore: 1 },
        { label: 'Dexterity', abilityScore: 1 },
        { label: 'Constitution', abilityScore: 1 },
        { label: 'Intelligence', abilityScore: 1 },
        { label: 'Wisdom', abilityScore: 1 },
        { label: 'Charisma', abilityScore: 1 },
      ];
      const expectedResult = [
        { label: 'Strength-new', abilityScore: 2 },
        { label: 'Dexterity-new', abilityScore: 3 },
        { label: 'Constitution-new', abilityScore: 4 },
        { label: 'Intelligence-new', abilityScore: 5 },
        { label: 'Wisdom-new', abilityScore: 6 },
        { label: 'Charisma-new', abilityScore: 7 },
      ];
      spyOn(component, 'onStatsChanged').and.callThrough();
      expect(component.statistics).toEqual(statsValue);
      component.onStatsChanged(expectedResult);
      expect(component.statistics).toEqual(expectedResult);
    });
  });
});
