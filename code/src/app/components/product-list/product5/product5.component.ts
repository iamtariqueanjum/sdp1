import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product5',
  templateUrl: './product5.component.html',
  styleUrls: ['./product5.component.css']
})
export class Product5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp5(){
    this.router.navigate(['/product5'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
