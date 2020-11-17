import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly username: string;
}