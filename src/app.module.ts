import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            typePaths: ['./**/*.graphql'],
            path: join(process.cwd(), 'src/graphql.ts'),
        }),
        MongooseModule.forRoot('mongodb://localhost/nestgraphql')
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
