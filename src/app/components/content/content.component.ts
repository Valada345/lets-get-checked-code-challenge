import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  posts: Post[] | null = null;
  comments: any = null;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.apiService.getPosts().subscribe((posts) => {
        this.posts = this.orderPostsByDate(posts);
        this.stateService.setPosts(this.posts);
      })
    );

    /* this.apiService.addComment(2, {
      content: 'string',
      date: '2016-12-10',
      parent_id: null,
      postId: 3,
      user: 'Best',
    }); */

    /* this.apiService.updateComment(15, {
      content: 'It kinda works',
      date: '2016-12-10',
      parent_id: null,
      postId: 3,
      user: 'Best',
    }); */
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private orderPostsByDate(posts: Post[]): Post[] {
    return posts
      ?.sort((a, b) => {
        return Date.parse(a.publish_date) - Date.parse(b.publish_date);
      })
      .reverse();
  }
}
