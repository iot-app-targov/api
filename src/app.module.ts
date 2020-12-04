import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GatewayModule } from './common/gateway/gateway.module';

@Module({
    imports: [
        UserModule,
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            autoSchemaFile: 'schema.gql',
        }),
        MongooseModule.forRoot('mongodb://localhost/iot-app-db'),
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GatewayModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
