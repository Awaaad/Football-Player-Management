import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSharedComponent } from './header-shared.component';

describe('HeaderSharedComponent', () => {
  let component: HeaderSharedComponent;
  let fixture: ComponentFixture<HeaderSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
