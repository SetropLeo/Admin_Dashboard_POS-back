import { Column, Entity } from "typeorm";
import { BaseEntity } from "./Base";


@Entity('category')
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 25 })
  name: string
}