import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchDisplayComponent } from './image-search-display.component';

describe('ImageSearchDisplayComponent', () => {
  let component: ImageSearchDisplayComponent;
  let fixture: ComponentFixture<ImageSearchDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSearchDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSearchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
