import { Component, OnInit } from '@angular/core';
import { ApiTestingService } from '../api-testing.service';

interface Character {
  id:number;
  name: string;
  created: Date;
  gender: string;
  status: string;
  image: string;
}

@Component({
  selector: 'app-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent implements OnInit {

  characters: Character[] = [];

  constructor(private service: ApiTestingService) { }

  ngOnInit() {
    
    this.service.getCharacter().subscribe({
      next: (response:any) => {
        console.log(response.results);
        this.characters = response.results;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('API call completed');
      }
    });
    
  }
}
