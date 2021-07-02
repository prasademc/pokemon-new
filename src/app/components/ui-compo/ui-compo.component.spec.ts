import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCompoComponent } from './ui-compo.component';

describe('UiCompoComponent', () => {
  let component: UiCompoComponent;
  let fixture: ComponentFixture<UiCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
