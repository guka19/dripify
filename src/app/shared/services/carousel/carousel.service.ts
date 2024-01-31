import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  getData() {
    return [
      {
          id: uuidv4(),
          code: uuidv4(),
          name: "Bardot Sweater",
          description: "",
          image: "assets/products/bardot-sweater.jpg",
          price: 109,
          category: "Tops",
          quantity: 69,
          inventoryStatus: "INSTOCK",
          rating: 4.7
      },
      {
          id: uuidv4(),
          code: uuidv4(),
          name: "Double Sleeve Sweatshirt",
          description: "",
          image: "assets/products/double_sleeve_sweatshirt.webp",
          price: 109,
          category: "Hoodies and Sweatshirts",
          quantity: 15,
          inventoryStatus: "LOWSTOCK",
          rating: 4.3
      },
      {
          id: uuidv4(),
          code: uuidv4(),
          name: "Baseball Jacket",
          description: "",
          image: "assets/products/leather_effect_baseball_jacket.webp",
          price: 109,
          category: "Jackets and Coats",
          quantity: 45,
          inventoryStatus: "INSTOCK",
          rating: 4.4
      },
      {
          id: uuidv4(),
          code: uuidv4(),
          name: "Sleeveless Tshirt",
          description: "",
          image: "assets/products/sleeveless_open_back_tshirt.webp",
          price: 49,
          category: "Tshirts",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4.8
      },
      {
          id: uuidv4(),
          code: uuidv4(),
          name: "Halter Neck Waistcoast",
          description: "",
          image: "assets/products/tailored_halter_neck_waistcoast.webp",
          price: 49,
          category: "Tops",
          quantity: 101,
          inventoryStatus: "INSTOCK",
          rating: 4.1
      },
      {
          id: uuidv4(),
          code: uuidv4(),
          name: "Technical Jacket",
          description: "",
          image: "assets/products/technical_jacket.webp",
          price: 99,
          category: "Jackets",
          quantity: 19,
          inventoryStatus: "LOWSTOCK",
          rating: 4.3
      },
    ]
  }

  getProducts() {
    return Promise.resolve(this.getData());
  }

  constructor() { }
}
