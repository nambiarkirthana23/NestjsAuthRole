import { IsNotEmpty, Matches } from "class-validator";
export class Userdto {
    // @IsNotEmpty()
    // id:number;
    @IsNotEmpty()
    username;
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#?!@$%^&*-]).{8,}$/, { message: 'Password should have 1 upper case,lowercase along with number and special character.' })
    @IsNotEmpty()
    password;
    role;
}
