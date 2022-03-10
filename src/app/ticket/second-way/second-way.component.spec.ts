import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWayComponent } from './second-way.component';

describe('SecondWayComponent', () => {
  let component: SecondWayComponent;
  let fixture: ComponentFixture<SecondWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
