import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarMovingComponent } from './star-moving.component';

describe('StarMovingComponent', () => {
  let component: StarMovingComponent;
  let fixture: ComponentFixture<StarMovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarMovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
