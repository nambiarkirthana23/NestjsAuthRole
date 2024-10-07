import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UseController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UseController],
    exports: [UsersService],
})
export class UsersModule {
}
