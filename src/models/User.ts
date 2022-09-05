import { BaseModel } from "./Base";

export class User extends BaseModel {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}