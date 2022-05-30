import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrokoutsComponent } from './wrokouts.component';

describe('WrokoutsComponent', () => {
  let component: WrokoutsComponent;
  let fixture: ComponentFixture<WrokoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrokoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrokoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
