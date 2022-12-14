import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";


@Entity("points")
export class Point extends BaseEntity {
    
    @Column()
    image!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    whatsapp!: string;

    @Column()
    latitude!: number;

    @Column()
    longitude!: number;

    @Column()
    city!: string;

    @Column()
    county!: string;

}