import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product8',
  templateUrl: './product8.component.html',
  styleUrls: ['./product8.component.css']
})
export class Product8Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp8(){
    this.router.navigate(['/product8'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }
}
