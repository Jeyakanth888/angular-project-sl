import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsGrComponent } from './breadcrumbs-gr.component';

describe('BreadcrumbsGrComponent', () => {
  let component: BreadcrumbsGrComponent;
  let fixture: ComponentFixture<BreadcrumbsGrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsGrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsGrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
