import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ActiveComment,
  ActiveCommentTypeEnum,
  Comment,
} from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  @Input() replies!: Comment[];
  @Input() activeComment!: ActiveComment | null;
  @Input() parentId: number | null = null;

  @Output() setAsActiveComment = new EventEmitter<ActiveComment | null>();
  @Output() addComment = new EventEmitter<{
    comment: { text: string; userName: string };
    parentId: number | null;
  }>();

  activeCommentType = ActiveCommentTypeEnum;
  replyId: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.replyId = this.parentId ? this.parentId : this.comment.id;
  }

  isReplying(): boolean {
    if (!this.activeComment) {
      return false;
    }

    return (
      this.activeComment.id === this.comment.id &&
      this.activeComment.type === this.activeCommentType.replying
    );
  }
}
