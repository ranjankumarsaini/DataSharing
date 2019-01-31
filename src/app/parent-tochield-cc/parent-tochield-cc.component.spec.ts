import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTochieldCcComponent } from './parent-tochield-cc.component';

describe('ParentTochieldCcComponent', () => {
  let component: ParentTochieldCcComponent;
  let fixture: ComponentFixture<ParentTochieldCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTochieldCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTochieldCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
