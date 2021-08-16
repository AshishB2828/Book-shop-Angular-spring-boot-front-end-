import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UauthroizedComponent } from './uauthroized.component';

describe('UauthroizedComponent', () => {
  let component: UauthroizedComponent;
  let fixture: ComponentFixture<UauthroizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UauthroizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UauthroizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
