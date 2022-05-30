import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgnfoundComponent } from './pgnfound.component';

describe('PgnfoundComponent', () => {
  let component: PgnfoundComponent;
  let fixture: ComponentFixture<PgnfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgnfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgnfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
