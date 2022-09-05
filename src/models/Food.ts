import { BaseModel } from "./Base";

export class Food extends BaseModel {
  name: string;
  image: string;
  description: string;
  price: number;
  category_id: string;
}