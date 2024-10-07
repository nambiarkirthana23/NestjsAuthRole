import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmconfigAsync } from './typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Make ConfigModule available to all modules
        }),
        AuthModule, UsersModule, TypeOrmModule.forRootAsync(typeOrmconfigAsync)
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
