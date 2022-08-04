import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

//import PointItems from '@modules/points/infra/typeorm/entities/PointItems';

@Entity('items')
export class Item extends BaseEntity {


    @Column()
    image!: string;

    @Column()
    title!: string;

    // @OneToMany(() => PointItems, pointItems => pointItems.item, {
    //     cascade: ['insert'],
    // })
    // point_items: PointItems[];


    // @BeforeInsert()
    // async setImage(image: string) {
    //     this.image = image;
    // }

    // @BeforeInsert()
    // async setTitle(title: string) {
    //     this.title = title;
    // }
}
