import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamerPage } from './gamer.page';

describe('GamerPage', () => {
  let component: GamerPage;
  let fixture: ComponentFixture<GamerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GamerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
