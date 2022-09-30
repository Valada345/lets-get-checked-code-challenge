import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  @Input() replies!: Comment[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.comment);
    console.log(this.replies);
  }
}
