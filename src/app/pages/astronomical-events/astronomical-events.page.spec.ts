import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AstronomicalEventsPage } from './astronomical-events.page';

describe('AstronomicalEventsPage', () => {
  let component: AstronomicalEventsPage;
  let fixture: ComponentFixture<AstronomicalEventsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomicalEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
