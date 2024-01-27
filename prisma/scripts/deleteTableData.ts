import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

async function clearCityTable() {
  try {
    // Delete all records from the City table
    await prisma.city.deleteMany({});

    // Reset the auto-increment id back to default (assuming it's SERIAL)
    await prisma.$executeRaw`TRUNCATE TABLE "City" CASCADE`;
    console.log(
      'All data from the City table has been cleared, and the auto-increment id has been reset.'
    );
  } catch (error) {
    console.error('Error clearing data from the City table:', error);
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}

// Invoke function to clear the City table
clearCityTable();
