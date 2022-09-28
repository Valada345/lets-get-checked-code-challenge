import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  allPosts: any = null;
  comments: any = null;

  private subscriptions: Subscription = new Subscription();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.apiService.getPosts().subscribe((posts) => {
        this.allPosts = posts;
        console.log('Posts: ', this.allPosts);
      })
    );

    this.subscriptions.add(
      this.apiService.getCommentsByPost(1).subscribe((comments) => {
        this.comments = comments;
        console.log('Comments: ', this.comments);
      })
    );

    /* this.apiService.addComment(2, {
      content: 'string',
      date: '2016-12-10',
      parent_id: null,
      postId: 3,
      user: 'Best',
    }); */

    this.apiService.updateComment(15, {
      content: 'It kinda works',
      date: '2016-12-10',
      parent_id: null,
      postId: 3,
      user: 'Best',
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
