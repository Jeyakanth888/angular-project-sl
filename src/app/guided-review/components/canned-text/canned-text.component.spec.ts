import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannedTextComponent } from './canned-text.component';

describe('CannedTextComponent', () => {
  let component: CannedTextComponent;
  let fixture: ComponentFixture<CannedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
