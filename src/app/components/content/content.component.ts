import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  posts: Post[] | null = null;
  comments: any = null;

  private subscriptions: Subscription = new Subscription();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.apiService.getPosts().subscribe((posts) => {
        this.posts = this.orderPostsByDate(posts);
      })
    );

    /* this.apiService.addComment(2, {
      content: 'string',
      date: '2016-12-10',
      parent_id: null,
      postId: 3,
      user: 'Best',
    }); */

    /* this.apiService.updateComment(2, {
      content: 'It kinda works',
      date: '2016-12-10',
      parent_id: null,
      postId: 1,
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
