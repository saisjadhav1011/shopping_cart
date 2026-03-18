import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1773834527131 implements MigrationInterface {
    name = 'Migration1773834527131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "refresh_token"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "reset_token"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "is_verified"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "last_login_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "last_login_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "is_verified" boolean`);
        await queryRunner.query(`ALTER TABLE "user" ADD "reset_token" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "refresh_token" text`);
    }

}
