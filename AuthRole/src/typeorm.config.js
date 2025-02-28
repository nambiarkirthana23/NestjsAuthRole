import { ConfigModule, ConfigService } from "@nestjs/config";
export default class TypeOrmConfig {
    static getOrmConfig(configService) {
        return {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [__dirname, '**', '*.entity.{ts,js}'],
            synchronize: true,
            autoLoadEntities: true,
            // migrations:['dist/db/migrations/*.js']
        };
    }
}
// const typeOrmconfig =new TypeOrmConfig()
export const typeOrmconfigAsync = {
    imports: [ConfigModule],
    useFactory: async (configService) => TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService],
};
