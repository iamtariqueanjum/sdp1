import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  
  onHome(){
    this.router.navigate(['/home'])
  }
  onShop(){
    this.router.navigate(['/products'])
  }
  onp1(){
    this.router.navigate(['/product1'])
  }
  onp2(){
    this.router.navigate(['/product2'])
  }
  onp3(){
    this.router.navigate(['/product3'])
  }
  onp4(){
    this.router.navigate(['/product4'])
  }
  onp5(){
    this.router.navigate(['/product5'])
  }
  onp6(){
    this.router.navigate(['/product6'])
  }

}
