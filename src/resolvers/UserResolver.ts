import { User } from "../models/User";
import { UserService } from "../services/UserService";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async getUser(@Arg("id") id: number): Promise<User | null> {
    return UserService.getUser(id);
  }

  @Query(() => [User], { nullable: true })
  async getUserList(): Promise<User[]> {
    return UserService.getUserList();
  }
}
