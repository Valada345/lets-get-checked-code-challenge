import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/interfaces';
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
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post = defaultPost;

  constructor(private router: Router, private stateService: StateService) {}

  ngOnInit(): void {}

  navigateToPost(): void {
    this.router.navigateByUrl(`post/${this.post.id}`);
    this.stateService.setSelectedPost(this.post);
  }
}
