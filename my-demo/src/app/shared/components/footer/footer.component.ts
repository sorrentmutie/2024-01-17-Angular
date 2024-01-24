import { Component } from '@angular/core';

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
      console.log('FooterComponent constructor');
      setInterval( () => {
        console.log('FooterComponent setInterval');
        this.counter++;
      //   this.subTitle = `Contatore: ${this.counter}`;
       }  , 1000);
    }
}
