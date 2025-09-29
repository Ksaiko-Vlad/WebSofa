-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `fromLocationId` INTEGER NULL,
    ADD COLUMN `orderId` INTEGER NULL,
    ADD COLUMN `toLocationId` INTEGER NULL,
    ADD COLUMN `userId` INTEGER NULL;
