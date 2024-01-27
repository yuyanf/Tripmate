/*
  Warnings:

  - Added the required column `countryCode` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `population` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "countryCode" TEXT NOT NULL,
ADD COLUMN     "population" INTEGER NOT NULL;
