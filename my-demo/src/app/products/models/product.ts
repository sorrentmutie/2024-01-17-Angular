export type MyDate = Date | undefined;

export enum MyEnum { Ready, Reset, Gone}


export interface Product {
    id: number,
    name: string,
    price: number,
    releaseDate: MyDate,
    imageUrl: string,
}
3

export class ProductClass {

    constructor(public id:number, public name:string, public price:number, public releaseDate:MyDate, public imageUrl:string){

    }
}

