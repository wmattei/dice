import { BOOLEAN, FLOAT, INTEGER, Model } from "sequelize";
import { Field, InputType, ObjectType } from "type-graphql";
import { sequelizeConnection } from "../config/db/connection";
import { UserModel } from "./User";

@ObjectType()
export class Bet {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  betAmount: number;

  @Field()
  chance: number;

  @Field()
  payout: number;

  @Field()
  win: boolean;
}

@InputType()
export class BetInput {
  @Field()
  userId: number;

  @Field()
  betAmount: number;

  @Field()
  chance: number;

  @Field()
  payout: number;
}

@ObjectType()
export class GetBestBetOutput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  payout: number;
}

export class BetModel extends Model<Bet, Omit<Bet, "id">> implements Bet {
  public id!: number;
  public userId!: number;
  public betAmount!: number;
  public chance!: number;
  public payout!: number;
  public win!: boolean;
}

BetModel.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
      references: { model: UserModel },
      field: "user_id",
    },
    betAmount: {
      type: FLOAT,
      allowNull: false,
      field: "bet_amount",
    },
    chance: {
      type: INTEGER,
      allowNull: false,
    },
    payout: {
      type: FLOAT,
      allowNull: false,
    },
    win: {
      type: BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "bets",
    timestamps: false,
  }
);
