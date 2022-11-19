import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarGameplayComponent } from './star-gameplay.component';

describe('StarGameplayComponent', () => {
  let component: StarGameplayComponent;
  let fixture: ComponentFixture<StarGameplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarGameplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
