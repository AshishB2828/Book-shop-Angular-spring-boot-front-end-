export class Book{
    id:number|undefined;
    title:string="";
    description:string="";
    imageUrl:string="";
    author:string="";
    price:number=0;
    createTime:Date=new Date();
}