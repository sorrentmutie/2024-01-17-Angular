import { Component } from '@angular/core';
import { Product } from '../../../products/models/product';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    title = "Titolo";
    subTitle: string | undefined = undefined;
    counter = 0;

    constructor(){

      const product: Product = {
          id: 1, name :"Frigorifero", price: 1000, imageUrl: "https://picsum.photos/200/300", releaseDate: undefined
      };

      console.log('FooterComponent constructor');
      setInterval( () => {
        console.log('FooterComponent setInterval');
        this.counter++;
      //   this.subTitle = `Contatore: ${this.counter}`;
       }  , 1000);
    }
}
