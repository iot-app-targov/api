import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
});

export interface User extends Document {
    readonly id: string;
    readonly username: number;
    readonly password: string;
}