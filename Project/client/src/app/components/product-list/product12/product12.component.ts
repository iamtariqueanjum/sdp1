import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product12',
  templateUrl: './product12.component.html',
  styleUrls: ['./product12.component.css']
})
export class Product12Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp12(){
    this.router.navigate(['/product12'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
