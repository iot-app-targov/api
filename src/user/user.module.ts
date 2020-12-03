import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/common/guards/jwtAuth.guard';
import { User, UserSchema } from './schemas/user.entity';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    providers: [
        UserService,
        UserResolver,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
    exports: [UserService],
})
export class UserModule {}
