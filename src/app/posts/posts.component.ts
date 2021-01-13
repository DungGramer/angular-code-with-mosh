import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement): void {
    const body = { title: input.value };
    this.postsService.createPost(body).subscribe((res) => {
      body.id = res?.id;
      this.posts.splice(0, 0, body);
      input.value = '';
      console.log(res);
    });
  }

  updatePost(post): void {
    this.postsService.updatePost(post.id).subscribe((res) => {
      console.log(res);
    });
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post): void {
    this.postsService.deletePost(post.id).subscribe((res) => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(res);
    });
  }
}
