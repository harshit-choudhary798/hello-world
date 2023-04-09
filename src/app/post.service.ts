import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})

export class PostService {
  url:string="https://jsonplaceholder.typicode.com/posts"

  constructor(private http :HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
  }

  addPost(post1:Post){
    return this.http.post(this.url,post1)
  }

  updatePost(post:Post,updatedPost:Post){
    return this.http.put(`${this.url}/${post.id}`, updatedPost)
  }

  deletePost(post:Post){
    return this.http.delete(`${this.url}/${post.id}`)
  }
}
