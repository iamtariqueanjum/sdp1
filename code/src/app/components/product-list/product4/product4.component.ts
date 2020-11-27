import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product4',
  templateUrl: './product4.component.html',
  styleUrls: ['./product4.component.css']
})
export class Product4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp4(){
    this.router.navigate(['/product4'])
  }
  onCart(){
    this.router.navigate(['/cart'])
  }

}
