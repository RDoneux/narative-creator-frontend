import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsItemComponent } from './statistics-item.component';

describe('StatisticsItemComponent', () => {
  let component: StatisticsItemComponent;
  let fixture: ComponentFixture<StatisticsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test default values', () => {
    expect(component.label).toBeUndefined();
    expect(component.abilityScore).toBeUndefined();
    expect(component.abilityModifier).toBeUndefined();
  });

  describe('score increased', () => {
    it('should not emit value if ability score is undefined', () => {
      spyOn(component, 'onScoreIncreased').and.callThrough();
      spyOn(component.scoreIncreased, 'emit').and.callThrough();

      expect(component.onScoreIncreased).not.toHaveBeenCalled();
      expect(component.scoreIncreased.emit).not.toHaveBeenCalled();

      component.abilityScore = undefined;
      component.onScoreIncreased();

      expect(component.onScoreIncreased).toHaveBeenCalled();
      expect(component.scoreIncreased.emit).not.toHaveBeenCalled();
    });

    it('should emit value if ability score is defined', () => {
      spyOn(component, 'onScoreIncreased').and.callThrough();
      spyOn(component.scoreIncreased, 'emit').and.callThrough();

      expect(component.onScoreIncreased).not.toHaveBeenCalled();
      expect(component.scoreIncreased.emit).not.toHaveBeenCalled();

      component.label = 'test-label';
      component.abilityScore = 1;
      component.onScoreIncreased();

      expect(component.onScoreIncreased).toHaveBeenCalled();
      expect(component.scoreIncreased.emit).toHaveBeenCalledOnceWith(
        'test-label'
      );
    });
  });

  describe('score decreased', () => {
    it('should not emit value if ability score is undefined', () => {
      spyOn(component, 'onScoreDecreased').and.callThrough();
      spyOn(component.scoreDecreased, 'emit').and.callThrough();

      expect(component.onScoreDecreased).not.toHaveBeenCalled();
      expect(component.scoreDecreased.emit).not.toHaveBeenCalled();

      component.abilityScore = undefined;
      component.onScoreDecreased();

      expect(component.onScoreDecreased).toHaveBeenCalled();
      expect(component.scoreDecreased.emit).not.toHaveBeenCalled();
    });

    it('should emit value if ability score is defined', () => {
      spyOn(component, 'onScoreDecreased').and.callThrough();
      spyOn(component.scoreDecreased, 'emit').and.callThrough();

      expect(component.onScoreDecreased).not.toHaveBeenCalled();
      expect(component.scoreDecreased.emit).not.toHaveBeenCalled();

      component.label = 'test-label';
      component.abilityScore = 1;
      component.onScoreDecreased();

      expect(component.onScoreDecreased).toHaveBeenCalled();
      expect(component.scoreDecreased.emit).toHaveBeenCalledOnceWith(
        'test-label'
      );
    });
  });
});
