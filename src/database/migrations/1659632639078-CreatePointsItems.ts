import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePointsItems1659632639078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'points_items',
                columns: [
                    {
                        name: 'point_id',
                        type: 'uuid',
                    },
                    {
                        name: 'item_id',
                        type: 'uuid',
                    },
                ]
            })
        )

        await queryRunner.createForeignKey('points_items', new TableForeignKey({
            name: 'FK_point_id',
            columnNames: ['point_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'points',
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
        }))

        await queryRunner.createForeignKey('points_items', new TableForeignKey({
            name: 'FK_item_id',
            columnNames: ['item_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'items',
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropForeignKey('points_items', 'FK_point_id');

        await queryRunner.dropForeignKey('points_items', 'FK_item_id');
        
        await queryRunner.dropTable('points_items');
    }

}
