import { FLOAT, INTEGER, Model, STRING } from "sequelize";
import { Field, ObjectType } from "type-graphql";
import { sequelizeConnection } from "../config/db/connection";

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  balance: number;
}

export class UserModel extends Model<User> implements User {
  public id!: number;
  public name!: string;
  public balance!: number;
}

UserModel.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    balance: {
      type: FLOAT,
      defaultValue: 0.9,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "users",
    timestamps: false,
  }
);
