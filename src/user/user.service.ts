import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserInput, UserType } from './graphql/user';
import { User, UserDocument } from './schemas/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

    async create(createUserDto: CreateUserInput): Promise<UserType> {
        const createdItem = new this.userModel(createUserDto);
        console.log(createUserDto, createdItem);
        return await createdItem.save();
    }

    async findAll(): Promise<UserType[]> {
        return await this.userModel.find().exec();
    }

    async findOne(id: string): Promise<UserType> {
        return await this.userModel.findOne({ _id: id });
    }

    async findOneByUsername(username: string): Promise<UserType> {
        return await this.userModel.findOne({ username }).lean();
    }

    async delete(id: string): Promise<UserType> {
        return await this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, item: User): Promise<UserType> {
        return await this.userModel.findByIdAndUpdate(id, item, { new: true });
    }
}
