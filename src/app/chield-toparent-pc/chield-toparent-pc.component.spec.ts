import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldToparentPcComponent } from './chield-toparent-pc.component';

describe('ChieldToparentPcComponent', () => {
  let component: ChieldToparentPcComponent;
  let fixture: ComponentFixture<ChieldToparentPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChieldToparentPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChieldToparentPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
