import "reflect-metadata"
import { DataSource } from "typeorm";
import 'dotenv/config';
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["src/database/migrations/*.ts"],
})