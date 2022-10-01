import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/interfaces';

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
  ): Observable<any> {
    const url = `http://localhost:9000/posts/${postId}/comments`;
    return this.httpClient.post<Comment>(url, comment);
  }

  updateComment(
    commentId: number,
    comment: {
      content: string;
      date: string;
      user: string;
    }
  ): Observable<Comment> {
    const url = `http://localhost:9000/comments/${commentId}`;
    return this.httpClient.patch<Comment>(url, comment);
  }
}
