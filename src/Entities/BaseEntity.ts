import { CreateDateColumn, PrimaryColumn } from "typeorm";

export class BaseEntity {

    @PrimaryColumn()
    id!: string;

    @CreateDateColumn()
    createdAt!: Date;

    constructor() {
        if (!this.id) {
            this.id = this.generateUUID();
        }
    }

    generateUUID(): string {
        return crypto.randomUUID()
    }
}