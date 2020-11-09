import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosaltresComponent } from './nosaltres.component';

describe('NosaltresComponent', () => {
  let component: NosaltresComponent;
  let fixture: ComponentFixture<NosaltresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosaltresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosaltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
