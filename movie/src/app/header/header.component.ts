import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  val:string='' 
  constructor(private router: Router) {}
  navigateToAddMovie() {
    
    this.router.navigate(['/add-movie']);
  }

  navigateToCards(){
    this.router.navigate(['']);
  }

  
}
