import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToPost(): void {
    this.router.navigateByUrl(`post/${this.post.id}`);
  }
}
