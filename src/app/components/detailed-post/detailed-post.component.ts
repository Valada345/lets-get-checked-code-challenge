import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post, Comment, ActiveComment } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.scss'],
})
export class DetailedPostComponent implements OnInit {
  post: Post | null = null;
  comments: Comment[] = [];
  activeComment: ActiveComment | null = null;

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    const postId = Number(this.router.url.split('/').pop());
    if (!this.post) {
      this.subscriptions.add(
        this.apiService.getPost(postId).subscribe(
          (post) => {
            this.post = post;
          },
          () => {
            this.router.navigateByUrl('home');
          }
        )
      );
    }

    this.subscriptions.add(
      this.apiService.getCommentsByPost(postId).subscribe((comments) => {
        this.comments = comments;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addComment({
    comment,
    parentId,
  }: {
    comment: { text: string; userName: string };
    parentId: number | null;
  }) {
    const commentToPost = {
      content: comment.text,
      user: comment.userName,
      date: new Date().toISOString().slice(0, 10),
      postId: this.post?.id!,
      parent_id: parentId!,
    };
    this.apiService
      .addComment(this.post?.id!, commentToPost)
      .subscribe((createdComment) => {
        this.comments = [...this.comments, createdComment];
        this.activeComment = null;
      });
  }

  updateComment({
    comment,
    commentId,
  }: {
    comment: { text: string; userName: string };
    commentId: number;
  }) {
    const commentToPost = {
      content: comment.text,
      user: comment.userName,
      date: new Date().toISOString().slice(0, 10),
    };
    this.apiService
      .updateComment(commentId, commentToPost)
      .subscribe((updatedComment) => {
        this.comments = this.comments.map((comment) => {
          if (comment.id === commentId) {
            return updatedComment;
          }
          return comment;
        });
        this.activeComment = null;
      });
  }

  setAsActiveComment(active: ActiveComment | null): void {
    this.activeComment = active;
  }

  getReplies(providedComment: any): Comment[] {
    return this.comments.filter(
      (comment) => comment.parent_id === providedComment.id
    );
  }

  getRootComments(): Comment[] {
    return this.comments.filter((comment) => comment.parent_id === null);
  }
}
