import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: string) {
    return this.http.patch(
      this.url + '/' + post,
      JSON.stringify({ isRead: true })
    );
  }

  deletePost(post: string) {
    return this.http.delete(this.url + '/' + post);
  }
}
