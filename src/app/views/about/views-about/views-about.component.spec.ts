import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsAboutComponent } from './views-about.component';

describe('ViewsAboutComponent', () => {
  let component: ViewsAboutComponent;
  let fixture: ComponentFixture<ViewsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
