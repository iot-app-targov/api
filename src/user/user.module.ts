import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { UserSchema } from './schemas/user.entity';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    providers: [UserService, UserResolver],
})
export class UserModule { }