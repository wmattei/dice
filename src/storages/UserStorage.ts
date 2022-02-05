import { UserModel, User } from "../models/User";

export class UserStorage {
  static async getUser(id: number): Promise<User | null> {
    const user = await UserModel.findByPk(id);
    return user;
  }

  static async getUserList(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users;
  }

  static async updateUserBalance(
    userId: number,
    balance: number
  ): Promise<User> {
    const [, users] = await UserModel.update(
      { balance },
      {
        where: { id: userId },
        returning: true,
      }
    );
    return users[0];
  }
}
