import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendUnavailableComponent } from './backend-unavailable.component';

describe('BackendUnavailableComponent', () => {
  let component: BackendUnavailableComponent;
  let fixture: ComponentFixture<BackendUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendUnavailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
