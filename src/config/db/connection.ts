import { Sequelize } from "sequelize";

const DB_URL = process.env.DATABASE_URL as string;

export const sequelizeConnection = new Sequelize(DB_URL, {
  dialect: "postgres",
});
