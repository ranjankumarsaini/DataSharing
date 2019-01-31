import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTochieldPcComponent } from './parent-tochield-pc.component';

describe('ParentTochieldPcComponent', () => {
  let component: ParentTochieldPcComponent;
  let fixture: ComponentFixture<ParentTochieldPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTochieldPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTochieldPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
