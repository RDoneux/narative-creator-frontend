import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsComponent } from 'src/app/components/components.component';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('output vaues', () => {
    it('should test modal closed', () => {
      const event = new Event('');

      spyOn(component, 'onModalClose').and.callThrough();
      spyOn(component.modalClosed, 'emit');

      expect(component.onModalClose).not.toHaveBeenCalled();
      expect(component.modalClosed.emit).not.toHaveBeenCalled();

      component.onModalClose(event);

      expect(component.onModalClose).toHaveBeenCalledOnceWith(event);
      expect(component.modalClosed.emit).toHaveBeenCalledTimes(1);
    });
  });
});
