import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Crypt } from 'src/common/crypt/crypt';

export type UserDocument = User & Document;

@Schema({ skipVersioning: true, versionKey: false })
export class User {
    @Prop({ type: Types.ObjectId })
    id: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true, set: (v) => Crypt.hashInputSync(v) })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
