import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
    @Field(() => ID)
    readonly id?: string;

    @Field()
    readonly username: string;

    @Field()
    readonly password: string;
}

@InputType()
export class CreateUserInput {
    @Field()
    readonly username: string;

    @Field()
    readonly password: string;
}
