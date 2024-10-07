import {  IsNotEmpty,  Matches } from "class-validator";
import { UserRole } from "src/enum/role.enum";

export class Userdto{
    // @IsNotEmpty()
    // id:number;

    @IsNotEmpty()
    username:string;


    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#?!@$%^&*-]).{8,}$/,{message:'Password should have 1 upper case,lowercase along with number and special character.'})
    @IsNotEmpty()
    password:string;


    role:UserRole;
}