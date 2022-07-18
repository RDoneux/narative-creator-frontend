import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'src/app/services/message/message.service';
import { StatisticsConfig } from './stastistics.interface';

import { StatisticsComponent } from './statistics.component';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let messageService: MessageService;
  let fixture: ComponentFixture<StatisticsComponent>;

  let testStats: StatisticsConfig[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsComponent);
    messageService = TestBed.inject(MessageService);
    component = fixture.componentInstance;

    testStats = [
      {
        label: 'test-label',
        abilityScore: 2,
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test default values', () => {
    expect(component.stats).toBeUndefined();
  });

  describe('ng on init', () => {
    it('should do nothing if stats is undefined', () => {
      expect(component.stats).toBeUndefined();
      component.ngOnInit();
      expect(component.stats).toBeUndefined();
    });
    it('should print error to console if modifier has been manually passed in', () => {
      spyOn(messageService, 'consoleError');

      component.stats = testStats;
      component.stats[0].abilityModifier = 2;
      component.ngOnInit();

      expect(messageService.consoleError).toHaveBeenCalledOnceWith(
        'Ability modifier is calculated within component and should not be manually passed in.' +
          'Passed in value will be respected, but please note this will likely break the game.'
      );
      expect(component.stats[0].abilityModifier).toEqual(2);
    });
    it('should calculate appropriate abilityModifier', () => {
      component.stats = testStats;
      component.ngOnInit();

      expect(component.stats[0].abilityModifier).toEqual(-4);
    });
  });
  describe('score increased', () => {
    it('should print error if target can not be found', () => {
      spyOn(messageService, 'consoleError');
      spyOn(component.changed, 'emit');
      component.stats = testStats;
      component.onScoreIncreased('undefined-label');
      expect(messageService.consoleError).toHaveBeenCalledOnceWith(
        'Could not find target "undefined-label" in stats'
      );
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should print error if stats is undefined', () => {
      spyOn(messageService, 'consoleError');
      spyOn(component.changed, 'emit');
      component.stats = undefined;
      component.onScoreIncreased('test-label');
      expect(messageService.consoleError).toHaveBeenCalledOnceWith(
        'Could not find target "test-label" in stats'
      );
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should not increment value if equal to or higher than maxValue', () => {
      spyOn(component.changed, 'emit');
      component.stats = testStats;
      component.stats[0].abilityScore = 30;
      component.onScoreIncreased('test-label');
      expect(component.stats[0].abilityScore).toEqual(30);

      component.stats[0].abilityScore = 323;
      component.onScoreIncreased('test-label');
      expect(component.stats[0].abilityScore).toEqual(323);
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should increment value if score is lower than maxValue', () => {
      spyOn(component.changed, 'emit');
      component.stats = testStats;
      component.stats[0].abilityScore = 2;
      component.onScoreIncreased('test-label');
      expect(component.stats[0].abilityScore).toEqual(3);
      expect(component.changed.emit).toHaveBeenCalled();
    });
    it('should set appropriated rounded ability modifier', () => {
      spyOn(component.changed, 'emit');
      component.stats = testStats;
      component.stats[0].abilityScore = 0;
      component.onScoreIncreased('test-label');
      expect(component.stats[0].abilityModifier).toEqual(-5);
      expect(component.changed.emit).toHaveBeenCalled();
    });
    it('should emit statistic', () => {
      spyOn(component.changed, 'emit').and.callThrough();
      component.stats = testStats;
      component.onScoreIncreased('test-label');
      expect(component.changed.emit).toHaveBeenCalledOnceWith([
        { label: 'test-label', abilityScore: 3, abilityModifier: -4 },
      ]);
    });
  });
  describe('score decreased', () => {
    it('should print error if target can not be found', () => {
      spyOn(messageService, 'consoleError');
      spyOn(component.changed, 'emit');
      component.stats = testStats;
      component.onScoreDecreased('undefined-label');
      expect(messageService.consoleError).toHaveBeenCalledOnceWith(
        'Could not find target "undefined-label" in stats'
      );
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should print error if stats is undefined', () => {
      spyOn(messageService, 'consoleError');
      spyOn(component.changed, 'emit');
      component.stats = undefined;
      component.onScoreDecreased('test-label');
      expect(messageService.consoleError).toHaveBeenCalledOnceWith(
        'Could not find target "test-label" in stats'
      );
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should not decrement value if equal to or lower than minValue', () => {
      spyOn(component.changed, 'emit');
      component.stats = testStats;
      component.stats[0].abilityScore = 0;
      component.onScoreDecreased('test-label');
      expect(component.stats[0].abilityScore).toEqual(0);

      component.stats[0].abilityScore = -323;
      component.onScoreDecreased('test-label');
      expect(component.stats[0].abilityScore).toEqual(-323);
      expect(component.changed.emit).not.toHaveBeenCalled();
    });
    it('should decrement value if score is higher than minValue', () => {
      spyOn(component.changed, 'emit');
      component.stats = testStats;
      component.stats[0].abilityScore = 2;
      component.onScoreDecreased('test-label');
      expect(component.stats[0].abilityScore).toEqual(1);
      expect(component.changed.emit).toHaveBeenCalled();
    });
    it('should set appropriated rounded ability modifier', () => {
      spyOn(component.changed, 'emit');
      component.stats = testStats;
      component.stats[0].abilityScore = 2;
      component.onScoreDecreased('test-label');
      expect(component.stats[0].abilityModifier).toEqual(-5);
      expect(component.changed.emit).toHaveBeenCalled();
    });
    it('should emit statistic', () => {
      spyOn(component.changed, 'emit').and.callThrough();
      component.stats = testStats;
      component.onScoreDecreased('test-label');
      expect(component.changed.emit).toHaveBeenCalledOnceWith([
        { label: 'test-label', abilityScore: 1, abilityModifier: -5 },
      ]);
    });
  });
});
