export class PurchaseHistory{

    id:number|undefined;
    userId:number|undefined;
    bookId:number|undefined;
    purchaseTime:Date= new Date();
    price:number|undefined;

    constructor( userId?:number,  bookId?:number,  price?:number){
                    this.userId = userId;
                    this.bookId = bookId;
                    this.price = price;

                }
}