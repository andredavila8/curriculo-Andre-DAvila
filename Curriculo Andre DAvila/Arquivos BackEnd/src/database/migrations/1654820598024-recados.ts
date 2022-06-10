import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class recados1654820598024 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'recados',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                    length: '255',
                    isNullable: true
                },
                {
                    name: 'detalhes',
                    type: 'varchar',
                    length: '255',
                    isNullable: true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('recados', true, true, true);
    }

}
