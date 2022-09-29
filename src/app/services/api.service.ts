import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    const url = 'http://localhost:9000/posts';
    return this.httpClient.get(url);
  }

  getPost(postId: number): Observable<any> {
    const url = `http://localhost:9000/posts/${postId}`;
    return this.httpClient.get(url);
  }

  getCommentsByPost(id: number): Observable<any> {
    const url = `http://localhost:9000/posts/${id}/comments`;
    return this.httpClient.get(url);
  }

  addComment(
    postId: number,
    comment: {
      content: string;
      date: string;
      parent_id: number | null;
      postId: number;
      user: string;
    }
  ) {
    const url = `http://localhost:9000/posts/${postId}/comments`;
    this.httpClient.post(url, comment).subscribe((res) => console.log(res));
  }

  updateComment(
    commentId: number,
    comment: {
      content: string;
      date: string;
      parent_id: number | null;
      postId: number;
      user: string;
    }
  ) {
    const url = `http://localhost:9000/comments/${commentId}`;
    this.httpClient.put(url, comment).subscribe((res) => console.log(res));
  }
}
