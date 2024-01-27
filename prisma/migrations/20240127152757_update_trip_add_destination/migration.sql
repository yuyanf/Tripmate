/*
  Warnings:

  - You are about to drop the column `tripId` on the `Itinerary` table. All the data in the column will be lost.
  - You are about to drop the column `coverImgId` on the `ItineraryItem` table. All the data in the column will be lost.
  - You are about to drop the column `coverImgId` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `destination` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `destinationId` to the `Itinerary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfPeople` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Itinerary" DROP CONSTRAINT "Itinerary_tripId_fkey";

-- AlterTable
ALTER TABLE "Itinerary" DROP COLUMN "tripId",
ADD COLUMN     "destinationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ItineraryItem" DROP COLUMN "coverImgId",
ADD COLUMN     "image" INTEGER;

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "coverImgId",
DROP COLUMN "destination",
ADD COLUMN     "editors" TEXT[],
ADD COLUMN     "image" INTEGER,
ADD COLUMN     "numberOfPeople" INTEGER NOT NULL,
ADD COLUMN     "relationship" TEXT,
ADD COLUMN     "totalBudget" TEXT;

-- CreateTable
CREATE TABLE "Destination" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tripId" INTEGER NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Itinerary" ADD CONSTRAINT "Itinerary_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Destination" ADD CONSTRAINT "Destination_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
