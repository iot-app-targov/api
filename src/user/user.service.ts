import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserInput, UserType } from './dto/user';
import { User } from './schemas/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private itemModel: Model<User>) {}

    async create(createUserDto: CreateUserInput): Promise<UserType> {
        const createdItem = new this.itemModel(createUserDto);
        return await createdItem.save();
      }
    
      async findAll(): Promise<UserType[]> {
        return await this.itemModel.find().exec();
      }
    
      async findOne(id: string): Promise<UserType> {
        return await this.itemModel.findOne({ _id: id });
      }
    
      async delete(id: string): Promise<UserType> {
        return await this.itemModel.findByIdAndRemove(id);
      }
    
      async update(id: string, item: User): Promise<UserType> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
      }
}