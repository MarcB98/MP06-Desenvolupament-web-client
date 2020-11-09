import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEventComponent } from './alta-event.component';

describe('AltaEventComponent', () => {
  let component: AltaEventComponent;
  let fixture: ComponentFixture<AltaEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
