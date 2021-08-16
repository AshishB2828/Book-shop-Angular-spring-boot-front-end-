import { Role } from "./Role.model";

export class User{

    id:number|undefined;
    username:string="";
    password:string="";
    name:string="";
    token:string="";
    role:Array<Role> = [];

}