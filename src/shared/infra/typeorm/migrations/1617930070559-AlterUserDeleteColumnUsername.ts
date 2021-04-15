import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteColumnUsername1617930070559
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "username",
                type: "varchar",
                isUnique: true,
            })
        );
    }
}
