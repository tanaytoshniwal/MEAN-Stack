import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogramComponent } from './photogram.component';

describe('PhotogramComponent', () => {
  let component: PhotogramComponent;
  let fixture: ComponentFixture<PhotogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
