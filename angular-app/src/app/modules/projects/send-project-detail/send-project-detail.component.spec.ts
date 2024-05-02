import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProjectDetailComponent } from './send-project-detail.component';

describe('SendProjectDetailComponent', () => {
  let component: SendProjectDetailComponent;
  let fixture: ComponentFixture<SendProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendProjectDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
