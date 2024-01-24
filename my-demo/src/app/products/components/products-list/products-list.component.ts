import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
    @Input() products: Product[]  = [];
    @Output() productSelected = new EventEmitter<Product>();

    showDetails(product: Product) {
     this.productSelected.emit(product);
    }
}
