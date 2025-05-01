import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SunMoonInfoPage } from './sun-moon-info.page';

describe('SunMoonInfoPage', () => {
  let component: SunMoonInfoPage;
  let fixture: ComponentFixture<SunMoonInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SunMoonInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
