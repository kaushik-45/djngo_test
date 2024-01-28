import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent implements OnInit {

  movieId:number=0;
  movieDetail:any=[];
  constructor(private route: ActivatedRoute,private shared: SharedService) {}

  ngOnInit(): void {
   this.route.paramMap.subscribe(params=>{
    this.movieId=+params.get('id')!;
    this.shared.getMovieDetails(this.movieId).subscribe((data: Object) => {
      console.log(data)
      this.movieDetail = data as any;
      
    });
   })
  
  }
  

 

}
