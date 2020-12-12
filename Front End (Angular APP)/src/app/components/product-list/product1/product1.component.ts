import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp1(){
    this.router.navigate(['/product1'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
