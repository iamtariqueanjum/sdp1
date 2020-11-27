import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product10',
  templateUrl: './product10.component.html',
  styleUrls: ['./product10.component.css']
})
export class Product10Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp10(){
    this.router.navigate(['/product10'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
