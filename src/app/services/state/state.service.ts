import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  posts: Post[] | null = null;
  selectedPost: Post | null = null;

  constructor() {}

  getPosts(): Post[] | null {
    return this.posts;
  }

  setPosts(posts: Post[]): void {
    this.posts = posts;
  }

  getSelectedPost(): Post | null {
    return this.selectedPost;
  }

  setSelectedPost(post: Post | null): void {
    this.selectedPost = post;
  }
}
