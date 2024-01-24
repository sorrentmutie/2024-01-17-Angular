import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { DiscountService } from "./discount-service";

@Injectable(
    {providedIn: 'root'}
)
export class ProductsService {

    private randomNumber: number = 0;


    getRandomNumber(): number { 
       return this.randomNumber;
    }

    constructor(private discountService: DiscountService) {
        console.log('Sono nel costruttore di ProductsService');
        this.randomNumber = Math.random();
    }

    loadDiscounerdProducts(): Product[] {

    return [
    {
      id: 4,
      name: 'Laser Disc',
      price: 1000,
      imageUrl: 'https://picsum.photos/200/200',
      releaseDate: new Date()
    },

  ]

    }


    loadProducts(): Product[] {
        const products: Product[] = [
          {
            id: 1,
            name: 'Frigorifero',
            price: 1000 * ( 1 - this.discountService.getDiscount(1)),
            imageUrl: 'https://picsum.photos/200/200',
            releaseDate: new Date()
          },
          {
            id: 2,
            name: 'Lavatrice',
            price: 500  * ( 1 - this.discountService.getDiscount(2)),
            imageUrl: 'https://picsum.photos/200/200',
            releaseDate: new Date()
          },
          {
            id: 3,
            name: 'Lavastoviglie',
            price: 800  * ( 1 - this.discountService.getDiscount(3)),
            imageUrl: 'https://picsum.photos/200/200',
            releaseDate: new Date()
          }
        ];
        return products;
      }
}
