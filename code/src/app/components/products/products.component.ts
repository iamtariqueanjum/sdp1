import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onp1(){
    this.router.navigate(['/product1'])
  }
  onp2(){
    this.router.navigate(['/product2'])
  }
  onp3(){
    this.router.navigate(['/product3'])
  }
  onp4(){
    this.router.navigate(['/product4'])
  }
  onp5(){
    this.router.navigate(['/product5'])
  }
  onp6(){
    this.router.navigate(['/product6'])
  }
  onp7(){
    this.router.navigate(['/product7'])
  }
  onp8(){
    this.router.navigate(['/product8'])
  }
  onp9(){
    this.router.navigate(['/product9'])
  }
  onp10(){
    this.router.navigate(['/product10'])
  }
  onp11(){
    this.router.navigate(['/product11'])
  }
  onp12(){
    this.router.navigate(['/product12'])
  }

}
