import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-like-count',
  templateUrl: './like-count.component.html',
  styleUrls: ['./like-count.component.css']
})
export class LikeCountComponent implements OnInit {

  

  @Input()isliked?:boolean
  @Input() count?:number

  liked(){
    this.isliked=!this.isliked
    if(this.count===0){this.count=1}else{this.count=0}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
