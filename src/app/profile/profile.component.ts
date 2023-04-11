import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiTestingComponent } from '../api-testing/api-testing.component';
import { ApiTestingService } from '../api-testing.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class  ProfileComponent implements OnInit {
userId?:any;
character?:any;
  constructor(private route: ActivatedRoute,private services:ApiTestingService) { }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (response) => {
        console.log(response);
        this.userId = response.get('id');

        this.route.queryParamMap.subscribe({
          next:(response)=>{
            console.log(response)
          }
        })

        this.services.getCharacter().subscribe({
          next:(response:any)=>{
           this.character=(response.results[this.userId-1])
          }
        })
      }
    });
  }
  

}
