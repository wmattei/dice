import { User } from "../models/User";
import { UserStorage } from "../storages/UserStorage";

export class UserService {
  static getUser(id: number): Promise<User | null> {
    return UserStorage.getUser(id);
  }
  static getUserList(): Promise<User[]> {
    return UserStorage.getUserList();
  }
  static updateUserBalance(userId: number, balance: number): Promise<User> {
    return UserStorage.updateUserBalance(userId, balance);
  }
}
