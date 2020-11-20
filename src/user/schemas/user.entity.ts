import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BeforeInsert } from 'typeorm/decorator/listeners/BeforeInsert';
import { hash }from 'bcrypt';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ type: Types.ObjectId })
    id: string;

    @Prop()
    username: string;

    @Prop()
    password: string;

    @BeforeInsert()  async hashPassword() {
        this.password = await hash(this.password, 10);  
    }
}

export const UserSchema = SchemaFactory.createForClass(User);