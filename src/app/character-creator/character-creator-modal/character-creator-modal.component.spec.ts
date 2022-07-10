import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorModalComponent } from './character-creator-modal.component';

describe('CharacterCreatorModalComponent', () => {
  let component: CharacterCreatorModalComponent;
  let fixture: ComponentFixture<CharacterCreatorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreatorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCreatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
