import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent 
implements OnInit, OnChanges, OnDestroy, DoCheck {
    @Input() product: Product | undefined = undefined;
    @Output() emitter = new EventEmitter<string>();
    @Input() counter = 0;
    counter2 = 0;

    constructor(){
      console.log('ProductDetailsComponent constructor');
      // setInterval(() => { this.counter2 +=1},1000)
    }
  ngDoCheck(): void {
   console.log('ProductDetailsComponent ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('ProductDetailsComponent ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ProductDetailsComponent ngOnChanges');
    console.log(changes);
  }
    ngOnInit(): void {
        console.log('ProductDetailsComponent ngOnInit');
    }

    goBack() {
      this.emitter.emit('goBack');
    }
}
