import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;

  @Field(() => UserEntity)
  user: UserEntity;
}
