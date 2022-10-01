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

  EmptyPostsMessage = 'There are no posts at the moment :(';

  private subscriptions: Subscription = new Subscription();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.apiService.getPosts().subscribe((posts) => {
        this.posts = this.orderPostsByDate(posts);
      })
    );
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
