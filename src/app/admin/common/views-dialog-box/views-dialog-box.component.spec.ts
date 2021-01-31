import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsDialogBoxComponent } from './views-dialog-box.component';

describe('ViewsDialogBoxComponent', () => {
  let component: ViewsDialogBoxComponent;
  let fixture: ComponentFixture<ViewsDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
