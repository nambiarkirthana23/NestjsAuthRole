import { Controller, Post } from "@nestjs/common";
@Controller('user')
export class UseController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    @Post('/register')
    async UserRegister(
    @Body(ValidationPipe)
    userRegister) {
        console.log("User Register", userRegister);
        return await this.userService.userregister(userRegister);
    }
}
