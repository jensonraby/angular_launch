import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePgmComponent } from './home-pgm.component';

describe('HomePgmComponent', () => {
  let component: HomePgmComponent;
  let fixture: ComponentFixture<HomePgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePgmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
