import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundwComponent } from './not-foundw.component';

describe('NotFoundwComponent', () => {
  let component: NotFoundwComponent;
  let fixture: ComponentFixture<NotFoundwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
