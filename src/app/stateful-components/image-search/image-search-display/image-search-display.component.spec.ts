import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchDisplayComponent } from './image-search-display.component';

describe('ImageSearchDisplayComponent', () => {
  let component: ImageSearchDisplayComponent;
  let fixture: ComponentFixture<ImageSearchDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageSearchDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageSearchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test default values', () => {
    expect(component.sourceUrls).toBeUndefined();
    expect(component.pageNumber).toBeUndefined();
    expect(component.hasNextPage).toBeFalse();
    expect(component.hasPreviousPage).toBeFalse();
    expect(component.totalPages).toEqual(0);
  });

  describe('on next page', () => {
    const testEvent = new Event('');
    it('should not emit value if there is no next page', () => {
      spyOn(component.nextPage, 'emit').and.callThrough();
      spyOn(component, 'onNextPage').and.callThrough();

      expect(component.nextPage.emit).not.toHaveBeenCalled();
      expect(component.onNextPage).not.toHaveBeenCalled();

      component.hasNextPage = false;
      component.onNextPage(testEvent);

      expect(component.onNextPage).toHaveBeenCalledOnceWith(testEvent);
      expect(component.nextPage.emit).not.toHaveBeenCalled();
    });
    it('should emit value if there is a next page', () => {
      spyOn(component.nextPage, 'emit').and.callThrough();
      spyOn(component, 'onNextPage').and.callThrough();

      expect(component.nextPage.emit).not.toHaveBeenCalled();
      expect(component.onNextPage).not.toHaveBeenCalled();

      component.hasNextPage = true;
      component.onNextPage(testEvent);

      expect(component.onNextPage).toHaveBeenCalledOnceWith(testEvent);
      expect(component.nextPage.emit).toHaveBeenCalled();
    });
  });

  describe('on previous page', () => {
    const testEvent = new Event('');
    it('should not emit value if there is no previous page', () => {
      spyOn(component.previousPage, 'emit').and.callThrough();
      spyOn(component, 'onPreviousPage').and.callThrough();

      expect(component.previousPage.emit).not.toHaveBeenCalled();
      expect(component.onPreviousPage).not.toHaveBeenCalled();

      component.hasPreviousPage = false;
      component.onPreviousPage(testEvent);

      expect(component.onPreviousPage).toHaveBeenCalledOnceWith(testEvent);
      expect(component.previousPage.emit).not.toHaveBeenCalled();
    });
    it('should emit value if there is a previous page', () => {
      spyOn(component.previousPage, 'emit').and.callThrough();
      spyOn(component, 'onPreviousPage').and.callThrough();

      expect(component.previousPage.emit).not.toHaveBeenCalled();
      expect(component.onPreviousPage).not.toHaveBeenCalled();

      component.hasPreviousPage = true;
      component.onPreviousPage(testEvent);

      expect(component.onPreviousPage).toHaveBeenCalledOnceWith(testEvent);
      expect(component.previousPage.emit).toHaveBeenCalled();
    });
  });
  describe('on image click', () => {
    it('should emit value on image click', () => {
      const testUrl = 'test-url';

      spyOn(component.imageClicked, 'emit').and.callThrough();
      spyOn(component, 'onImageClick').and.callThrough();

      expect(component.imageClicked.emit).not.toHaveBeenCalled();
      expect(component.onImageClick).not.toHaveBeenCalled();

      component.onImageClick(testUrl);

      expect(component.imageClicked.emit).toHaveBeenCalledOnceWith(testUrl);
      expect(component.onImageClick).toHaveBeenCalledOnceWith(testUrl);
    });
  });
  describe('on ng changes', () => {
    it('should set rounded page value on change', () => {
      spyOn(component, 'ngOnChanges').and.callThrough();

      component.totalPages = 2854 / 15;

      component.ngOnChanges();

      expect(component.totalPages).toEqual(190.26666666666668)
      expect(component.totalPagesRounded).toEqual(190);

    });
  });
});
