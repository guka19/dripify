// home.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { carouselItem } from 'src/app/shared/models/carousel_item';
import { CarouselService } from 'src/app/shared/services/carousel/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: carouselItem[] = [];
  responsiveOptions!: any[];

  autoplayInterval = 3000;

  showButtons = false;

  newsletterForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]]
  })

  toggleMenu() {
    this.showButtons = true;
  }

  hideMenu() {
    this.showButtons = false;
  }

  constructor(private carouselService: CarouselService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.carouselService.getProducts().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
        
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'success';
    }
  }
  
}


