import { Component } from '@angular/core';
import {SharedService} from "../shared/shared.service"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {


    name:string='';
    year:string='';
    image:string='';
    description:string='';

  

  constructor(private shared:SharedService) { }


  onSubmit() {
    const data = {
      name: this.name,
      image:this.image,
      year: this.year ,
      description:this.description
    };
    console.log(data);
    this.shared.addMovie(data)
    .subscribe(
      (response) => {
        console.log('Success:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
