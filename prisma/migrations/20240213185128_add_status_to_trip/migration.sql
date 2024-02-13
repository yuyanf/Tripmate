/*
  Warnings:

  - Added the required column `status` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "status" TEXT NOT NULL;
