/*
  Warnings:

  - Made the column `color` on table `materials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sku` on table `product_variants` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `width_mm` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `height_mm` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `depth_mm` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `route_hint` on table `shipments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `started_at` on table `shipments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `finished_at` on table `shipments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `materials` MODIFY `color` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product_variants` MODIFY `sku` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `width_mm` INTEGER NOT NULL,
    MODIFY `height_mm` INTEGER NOT NULL,
    MODIFY `depth_mm` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `shipments` MODIFY `route_hint` VARCHAR(191) NOT NULL,
    MODIFY `started_at` DATETIME(3) NOT NULL,
    MODIFY `finished_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `phone` VARCHAR(191) NOT NULL;
