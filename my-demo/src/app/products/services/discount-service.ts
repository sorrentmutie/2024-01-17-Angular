import { Injectable } from "@angular/core";

@Injectable( {
    providedIn: 'root'
})
export class DiscountService {

    getDiscount(idProduct: number): number {

        return idProduct % 2 === 0 ? 0.05 : 0.10;
    }
}
