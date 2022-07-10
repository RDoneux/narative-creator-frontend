import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterModalImageViewComponent } from './character-modal-image-view.component';

describe('CharacterModalImageViewComponent', () => {
  let component: CharacterModalImageViewComponent;
  let fixture: ComponentFixture<CharacterModalImageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterModalImageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterModalImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
