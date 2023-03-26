import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
 
  @Input("isActive") isActivee?:boolean;
  
  @Output("click") clicked= new EventEmitter();

  Active(){
    this.isActivee= !(this.isActivee)
    this.clicked.emit(this.isActivee)
  }
  

  constructor() { }


  ngOnInit(): void {
  }

}
