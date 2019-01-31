import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldToparentCcComponent } from './chield-toparent-cc.component';

describe('ChieldToparentCcComponent', () => {
  let component: ChieldToparentCcComponent;
  let fixture: ComponentFixture<ChieldToparentCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChieldToparentCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChieldToparentCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
