import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldtoparentviaviewchieldCcComponent } from './chieldtoparentviaviewchield-cc.component';

describe('ChieldtoparentviaviewchieldCcComponent', () => {
  let component: ChieldtoparentviaviewchieldCcComponent;
  let fixture: ComponentFixture<ChieldtoparentviaviewchieldCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChieldtoparentviaviewchieldCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChieldtoparentviaviewchieldCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
