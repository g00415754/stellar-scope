import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AstronomicalObjectsPage } from './astronomical-objects.page';

describe('AstronomicalObjectsPage', () => {
  let component: AstronomicalObjectsPage;
  let fixture: ComponentFixture<AstronomicalObjectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomicalObjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
