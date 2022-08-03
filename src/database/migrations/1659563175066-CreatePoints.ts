import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePoints1659563175066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'points',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'image',
                        type: 'varchar',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'whatsapp',
                        type: 'varchar',
                    },
                    {
                        name: 'latitude',
                        type: 'decimal',
                    },
                    {
                        name: 'longitude',
                        type: 'decimal',
                    },
                    {
                        name: 'city',
                        type: 'decimal',
                    },
                    {
                        name: 'county',
                        type: 'decimal',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('points')
    }

}
