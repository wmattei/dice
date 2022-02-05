import { BetModel, Bet, GetBestBetOutput } from "../models/Bet";

export class BetStorage {
  static async getBet(id: number): Promise<Bet | null> {
    const bet = await BetModel.findByPk(id);
    return bet;
  }

  static async getBetList(): Promise<Bet[]> {
    const bets = await BetModel.findAll();
    return bets;
  }

  static async createBet(bet: Omit<Bet, "id">): Promise<Bet> {
    const newBet = await BetModel.create(bet, { isNewRecord: true });
    return newBet;
  }

  static async getBestBetPerUser(limit: number): Promise<GetBestBetOutput[]> {
    const queryResult = await BetModel.sequelize?.query(
      `SELECT u.id, u.name, MAX(b.payout) as payout
          FROM bets b 
       INNER JOIN users u on u.id = b.user_id
          GROUP BY u.id
          ORDER BY payout desc 
       LIMIT $1`,
      { bind: [limit] }
    );

    if (!queryResult) {
      return [];
    }

    return queryResult[0] as GetBestBetOutput[];
  }
}
