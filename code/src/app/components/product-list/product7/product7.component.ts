import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-product7',
  templateUrl: './product7.component.html',
  styleUrls: ['./product7.component.css']
})
export class Product7Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp7(){
    this.router.navigate(['/product7'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
