import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomesticosPage } from './domesticos.page';

describe('DomesticosPage', () => {
  let component: DomesticosPage;
  let fixture: ComponentFixture<DomesticosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DomesticosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
