import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsNotFoundComponent } from './views-not-found.component';

describe('ViewsNotFoundComponent', () => {
  let component: ViewsNotFoundComponent;
  let fixture: ComponentFixture<ViewsNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
