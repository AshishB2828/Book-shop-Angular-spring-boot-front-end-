import { Role } from "./Role.model";

export class User{

    id:number|undefined;
    username:string="";
    name:string="";
    password:string="";
    token:string="";
    roles:Array<Role> = [
        { rolename: "",
        roledes: ""}
    ];
    
}