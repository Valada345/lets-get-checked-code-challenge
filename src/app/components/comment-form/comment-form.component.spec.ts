import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { CommentFormComponent } from './comment-form.component';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  const componentMockedData = {
    submitLabel: 'Mocked submit label',
    cancelButton: false,
    initialText: 'Mocked initial Text',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.debugElement.componentInstance;
    component.submitLabel = componentMockedData.submitLabel;
    component.cancelButton = componentMockedData.cancelButton;
    component.initialText = componentMockedData.initialText;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send the correct form information', () => {
    spyOn(component.handleCommentSubmit, 'emit');

    component.onSubmit();

    expect(component.handleCommentSubmit.emit).toHaveBeenCalledWith({
      text: 'Mocked initial Text',
      userName: '',
    });
  });
});
