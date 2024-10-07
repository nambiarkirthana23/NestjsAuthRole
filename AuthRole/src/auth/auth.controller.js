import { Controller, Get, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { UserRole } from "../enum/role.enum";
import { AuthGuard } from './guards/auth.guard';
@Controller('auth')
export class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    //   @HttpCode(HttpStatus.OK)
    @Post('login')
    //   async signIn(@Body() signInDto: Record<string, any>) {
    async signIn(
    @Req()
    req) {
        const { username, password } = req.body;
        console.log("Login");
        return await this.authService.signIn(username, password);
    }
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Get('profile')
    getProfile(
    @Request()
    req) {
        return req.user;
    }
}
