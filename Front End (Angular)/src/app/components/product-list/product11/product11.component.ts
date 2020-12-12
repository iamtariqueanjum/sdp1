import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product11',
  templateUrl: './product11.component.html',
  styleUrls: ['./product11.component.css']
})
export class Product11Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp11(){
    this.router.navigate(['/product11'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
