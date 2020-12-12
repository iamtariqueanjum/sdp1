import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp2(){
    this.router.navigate(['/product2'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
