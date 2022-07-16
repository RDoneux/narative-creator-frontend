import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('default values', () => {
    it('should test default values', () => {
      expect(component.pageNumber).toBeUndefined();
      expect(component.hasNextPage).toBeFalse();
      expect(component.hasPreviousPage).toBeFalse();
      expect(component.totalPages).toBe(0);
    })
  })

  describe('on next page', () => {
    it('should not emit value if there is no next page', () => {
      const event = new Event('');

      spyOn(component, 'onNextPage').and.callThrough();
      spyOn(component.nextPage, 'emit').and.callThrough();

      expect(component.onNextPage).not.toHaveBeenCalled();
      expect(component.nextPage.emit).not.toHaveBeenCalled();

      component.hasNextPage = false;

      component.onNextPage(event);

      expect(component.onNextPage).toHaveBeenCalledOnceWith(event);
      expect(component.nextPage.emit).not.toHaveBeenCalled();
    });
    it('should emit value if there is a next page', () => {
      const event = new Event('');

      spyOn(component, 'onNextPage').and.callThrough();
      spyOn(component.nextPage, 'emit').and.callThrough();

      expect(component.onNextPage).not.toHaveBeenCalled();
      expect(component.nextPage.emit).not.toHaveBeenCalled();

      component.hasNextPage = true;

      component.onNextPage(event);

      expect(component.onNextPage).toHaveBeenCalledOnceWith(event);
      expect(component.nextPage.emit).toHaveBeenCalledTimes(1);
    });
  });
  describe('on previous page', () => {
    it('should not emit value if there is no previous page', () => {
      const event = new Event('');

      spyOn(component, 'onPreviousPage').and.callThrough();
      spyOn(component.previousPage, 'emit').and.callThrough();

      expect(component.onPreviousPage).not.toHaveBeenCalled();
      expect(component.previousPage.emit).not.toHaveBeenCalled();

      component.hasPreviousPage = false;

      component.onPreviousPage(event);

      expect(component.onPreviousPage).toHaveBeenCalledOnceWith(event);
      expect(component.previousPage.emit).not.toHaveBeenCalled();
    });
    it('should emit value if there is a previous page', () => {
      const event = new Event('');

      spyOn(component, 'onPreviousPage').and.callThrough();
      spyOn(component.previousPage, 'emit').and.callThrough();

      expect(component.onPreviousPage).not.toHaveBeenCalled();
      expect(component.previousPage.emit).not.toHaveBeenCalled();

      component.hasPreviousPage = true;

      component.onPreviousPage(event);

      expect(component.onPreviousPage).toHaveBeenCalledOnceWith(event);
      expect(component.previousPage.emit).toHaveBeenCalledTimes(1);
    });
  });
});
