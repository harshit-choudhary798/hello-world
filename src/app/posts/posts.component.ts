import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  url:string="https://jsonplaceholder.typicode.com/posts"

  constructor(private services: PostService) { }

  ngOnInit() {
   this.services.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.posts = data as Post[];
      }
    })
  }
 
  addPost(input: HTMLInputElement) {
    const post1 = {
      title: input.value,
      userId: 1, // set a valid user ID here
      body: 'Example body text', // set an example body text here
    };

    this.services.addPost(post1 as Post).subscribe({
      next: (response) => {
        console.log(response);
        this.posts.splice(0, 0, response as Post);
      },
      error: (error) => {if(error.status===4000){
        alert("this has been deleted")
      }},
    });
    input.value = ''; // clear the input field
    
  }

  updatePost(post: Post, newTitle: string) {
    const updatedPost = {...post, title: newTitle };

    this.services.updatePost(post,updatedPost).subscribe({
      next: (response) => {
        console.log(response);
        // update the post in the posts array with the updated data
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1, response as Post);
      },
    });
  }

  DeletePost(post: Post) {
    this.services.deletePost(post).subscribe({
      next:(response) => {
          console.log(response);
          const index = this.posts.indexOf(post);
          this.posts.splice(index,1);
      }
    });
  }
}
