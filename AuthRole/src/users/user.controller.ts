import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Userdto } from "./user.dto";
import { User } from "./user.entity";


@Controller('user')
export class UseController {
    constructor(private userService: UsersService) { }
 

    @Post('/register')
    async UserRegister(@Body(ValidationPipe) userRegister:Userdto):Promise<User>{
        console.log("User Register", userRegister)
        return await this.userService.userregister(userRegister);
    }
    
}