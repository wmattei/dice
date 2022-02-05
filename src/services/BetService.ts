import { Bet, GetBestBetOutput } from "../models/Bet";
import { BetStorage } from "../storages/BetStorage";
import { UserService } from "./UserService";

export class BetService {
  static getBet(id: number): Promise<Bet | null> {
    return BetStorage.getBet(id);
  }
  static getBetList(): Promise<Bet[]> {
    return BetStorage.getBetList();
  }
  static async createBet(bet: Omit<Bet, "id" | "win">): Promise<Bet> {
    const diceResult = randomIntFromInterval(1, 6);
    const win = bet.chance >= diceResult;
    const savedBet = await BetStorage.createBet({ ...bet, win });


    const user = await UserService.getUser(bet.userId);

    if (!user) {
      throw new Error("User not found");
    }

    user.balance -= bet.betAmount;

    if (win) {
      user.balance += bet.payout;
    }

    await UserService.updateUserBalance(user.id, user.balance);

    return savedBet;
  }
  static getBestBetPerUser(limit: number): Promise<GetBestBetOutput[]> {
    return BetStorage.getBestBetPerUser(limit);
  }
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
