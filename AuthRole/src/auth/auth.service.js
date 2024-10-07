import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
    usersService;
    configService;
    jwtService;
    constructor(usersService, configService, jwtService) {
        this.usersService = usersService;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async signIn(username, password) {
        console.log("Creds ", username, password);
        const user = await this.usersService.findOne(username);
        if (!user) {
            throw new HttpException("Invalid Username", HttpStatus.NOT_FOUND);
        }
        console.log(user);
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        if (!isMatch) {
            throw new HttpException("Incorrect Password", HttpStatus.UNAUTHORIZED);
        }
        const payload = { id: user.id, username: user.username, role: user.role };
        const accessToken = this.jwtService.sign(payload, { expiresIn: this.configService.get("EXPIRES_IN") });
        return {
            access_token: accessToken
        };
    }
}
