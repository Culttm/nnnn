import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsMainComponent } from './views-main.component';

describe('ViewsMainComponent', () => {
  let component: ViewsMainComponent;
  let fixture: ComponentFixture<ViewsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
