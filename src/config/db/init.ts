import { BetModel } from "../../models/Bet";
import { UserModel } from "../../models/User";

export function dbInit() {
  UserModel.sync({ alter: true });
  BetModel.sync({ alter: true });
}
