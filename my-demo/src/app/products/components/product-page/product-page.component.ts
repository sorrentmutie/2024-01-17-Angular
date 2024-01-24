import { Component } from '@angular/core';
import { MyEnum, Product } from '../../models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  allProducts: Product[]  = [];

  allProductSelected(product: Product){
    console.log(product.name);
  }

  discountedProductSelected(product: Product){
    alert(product.id)
  }
   

  discountedProducts: Product[] = [
    {
      id: 4,
      name: 'Laser Disc',
      price: 1000,
      imageUrl: 'https://picsum.photos/200/200',
      releaseDate: new Date()
    },

  ];
  myEnum: MyEnum = MyEnum.Ready;
  MyEnum = MyEnum;

  constructor() {
   this.allProducts = this.loadProducts();
  }


  private loadProducts(): Product[] {
    const products: Product[] = [
      {
        id: 1,
        name: 'Frigorifero',
        price: 1000,
        imageUrl: 'https://picsum.photos/200/200',
        releaseDate: new Date()
      },
      {
        id: 2,
        name: 'Lavatrice',
        price: 500,
        imageUrl: 'https://picsum.photos/200/200',
        releaseDate: new Date()
      },
      {
        id: 3,
        name: 'Lavastoviglie',
        price: 800,
        imageUrl: 'https://picsum.photos/200/200',
        releaseDate: new Date()
      }
    ];
    return products;
  }
}
