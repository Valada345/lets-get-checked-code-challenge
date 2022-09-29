import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state/state.service';

const defaultPost: Post = {
  author: '',
  content: '',
  description: '',
  id: -1,
  publish_date: '',
  slug: '',
  title: '',
};

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.scss'],
})
export class DetailedPostComponent implements OnInit {
  post: Post | null = null;
  comments: Comment[] | null = null;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private stateService: StateService,
    private apiService: ApiService
  ) {
    this.post = this.stateService.getSelectedPost();
  }

  ngOnInit(): void {
    const postId = Number(this.router.url.split('/').pop());
    if (!this.post) {
      this.subscriptions.add(
        this.apiService.getPost(postId).subscribe((post) => {
          this.post = post;
          this.stateService.setSelectedPost(this.post);
        })
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
}
