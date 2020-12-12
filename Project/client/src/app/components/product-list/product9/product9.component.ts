import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product9',
  templateUrl: './product9.component.html',
  styleUrls: ['./product9.component.css']
})
export class Product9Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp9(){
    this.router.navigate(['/product9'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
