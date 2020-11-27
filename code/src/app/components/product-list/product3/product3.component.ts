import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp3(){
    this.router.navigate(['/product3'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
