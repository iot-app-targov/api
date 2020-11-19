import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CreateUserInput, UserType } from './dto/user';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Query(() => [UserType])
    async users() {
        return this.userService.findAll();
    }

    @Mutation(() => UserType)
    async createUser(@Args('input') input: CreateUserInput) {
        return this.userService.create(input);
    }

    @Mutation(() => UserType)
    async deleteUser(@Args('id') id: string) {
        return this.userService.delete(id);
    }
}