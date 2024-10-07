import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class RolesGuard {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        console.log("User ");
        const roles = this.reflector.get('role', context.getHandler());
        if (!roles || roles.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        console.log("User ", request);
        const user = request.user;
        const hasRole = () => roles.indexOf(user.role) >= 0;
        // console.log(user)
        if (user && user.role && hasRole()) {
            return true;
        }
        throw new HttpException('You do not have permission ', HttpStatus.UNAUTHORIZED);
    }
}
