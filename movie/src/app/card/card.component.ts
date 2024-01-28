import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  cardData: any[] = [];

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.getAllMovies().subscribe((data: Object) => {
      this.cardData = data as any[];
    });
  }
}
