import { Component } from '@angular/core';
import { MyEnum, Product } from '../../models/product';
import { ProductsService } from '../../services/products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  providers: [ProductsService]
})
export class ProductPageComponent {

  randomNumber = 0;
  allProducts: Product[]  = [];
  selectedProduct: Product | undefined = undefined;

  allProductSelected(product: Product){
   this.selectedProduct = product;
  }

  discountedProductSelected(product: Product){
    alert(product.id)
  }
  
  showTable(payload: string) {
    this.selectedProduct = undefined;
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
  myCounter = 1000;

  constructor(private service: ProductsService) {
   this.allProducts = this.service.loadProducts();
   this.randomNumber = this.service.getRandomNumber();
   // setInterval( () => this.myCounter +=1, 1000);
  }

  changeSelectedProduct(){
    // this.selectedProduct = {
    //   id: 42,
    //   name: 'Laser Disc',
    //   price: 1000,
    //   imageUrl: 'https://picsum.photos/200/200',
    //   releaseDate: new Date()
    // }
    if(this.selectedProduct){
       this.selectedProduct = {... this.selectedProduct, name: 'Nome diverso'}
    }

  }


}
