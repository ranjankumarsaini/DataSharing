import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldtoparentviaviewchieldPcComponent } from './chieldtoparentviaviewchield-pc.component';

describe('ChieldtoparentviaviewchieldPcComponent', () => {
  let component: ChieldtoparentviaviewchieldPcComponent;
  let fixture: ComponentFixture<ChieldtoparentviaviewchieldPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChieldtoparentviaviewchieldPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChieldtoparentviaviewchieldPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
