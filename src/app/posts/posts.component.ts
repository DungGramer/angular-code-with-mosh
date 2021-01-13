import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((response) => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement): void {
    const body = { title: input.value };
    this.http.post(this.url, JSON.stringify(body)).subscribe((res) => {
      body.id = res?.id;
      this.posts.splice(0, 0, body);
      input.value = '';
      console.log(res);
    });
  }
}
