import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattComponent } from './chatt.component';

describe('ChattComponent', () => {
  let component: ChattComponent;
  let fixture: ComponentFixture<ChattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
