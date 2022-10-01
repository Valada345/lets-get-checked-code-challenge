import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveCommentTypeEnum } from 'src/app/interfaces/interfaces';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  const componentMockedData = {
    activeComment: {
      id: 1,
      type: ActiveCommentTypeEnum.replying,
    },
    comment: {
      content: 'Comment mock content',
      date: '2022-09-30',
      id: 1,
      parent_id: null,
      postId: 3,
      user: 'Mock User',
    },
    replies: [],
    parentId: null,
  };

  const activeCommentMock = {
    id: 1,
    type: ActiveCommentTypeEnum.editing,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.debugElement.componentInstance;
    component.activeComment = componentMockedData.activeComment;
    component.comment = componentMockedData.comment;
    component.replies = componentMockedData.replies;
    component.parentId = componentMockedData.parentId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if its in replying state', () => {
    expect(component.isEditing()).toBe(false);
    component.activeComment = activeCommentMock;
    expect(component.isEditing()).toBe(true);
  });
});
