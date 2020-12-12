import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product6',
  templateUrl: './product6.component.html',
  styleUrls: ['./product6.component.css']
})
export class Product6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp6(){
    this.router.navigate(['/product6'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
