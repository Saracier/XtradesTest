import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoreButtonComponent } from './more-button.component';

describe('MoreButtonComponent', () => {
  let component: MoreButtonComponent;
  let fixture: ComponentFixture<MoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isTooLateToJoin input as false by default', () => {
    expect(component.isTooLateToJoin).toBeFalse();
  });

  it('should change isTooLateToJoin when input is set', () => {
    component.isTooLateToJoin = true;
    expect(component.isTooLateToJoin).toBeTrue();
  });
});
