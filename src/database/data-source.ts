import "reflect-metadata"
import { DataSource } from "typeorm";
import 'dotenv/config';
import { User } from "../entities/User";
import { Category } from "../entities/Category";
import { Food } from "../entities/Food";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Category, Food],
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
})