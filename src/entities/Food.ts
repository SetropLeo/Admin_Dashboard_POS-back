import { Column, Entity } from "typeorm";
import { BaseEntity } from "./Base";


@Entity('food')
export class Food extends BaseEntity {
  @Column({ type: 'varchar', length: 25 })
  name: string;

  @Column({ type: 'varchar', length: 250 })
  image: string;

  @Column({ type: 'varchar', length: 250 })
  description: string;

  @Column({ type: 'decimal', precision: 3, scale: 2 })
  price: number;

  @Column({ type: 'varchar', length: 25 })
  category_id: string;
}