import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBioComponent } from './character-bio.component';

describe('CharacterBioComponent', () => {
  let component: CharacterBioComponent;
  let fixture: ComponentFixture<CharacterBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('default values', () => {
    it('should test default editor config', () => {

      const expectedValue = {editable: true,
        spellcheck: true,
        height: 'auto',
        minHeight: '0',
        maxHeight: '40vh',
        width: 'auto',
        minWidth: '0',
        translate: 'yes',
        showToolbar: false}

      expect(component.editorConfig).toEqual(expectedValue)
    })
  })
});
