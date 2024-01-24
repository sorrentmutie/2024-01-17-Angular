import { Component } from '@angular/core';
import { ProductsService } from '../../../products/services/products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [ProductsService]
})
export class MenuComponent {
  
    menuRandomNumber = 0;

    constructor(private service: ProductsService) {
      this.menuRandomNumber = this.service.getRandomNumber();
    }

}
