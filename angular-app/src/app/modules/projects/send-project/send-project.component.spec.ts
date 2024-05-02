import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendProjectComponent } from './send-project.component';

describe('SendProjectComponent', () => {
  let component: SendProjectComponent;
  let fixture: ComponentFixture<SendProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
