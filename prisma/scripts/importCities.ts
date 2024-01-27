// Import necessary dependencies
const { PrismaClient } = require('@prisma/client');
const citiesData = require('cities.json/cities.json'); // Update 'package-name' with the actual package name

// Initialize Prisma client
const prisma = new PrismaClient();

// Define function to push data to the database
async function pushCitiesToDatabase() {
  try {
    // Iterate through the array of city objects
    for (const cityData of citiesData) {
      // Create city record in the database using Prisma
      await prisma.city.create({
        data: {
          name: cityData.name,
          lat: cityData.lat,
          lng: cityData.lng,
          country: cityData.country,
        },
      });
    }
    console.log('Cities data successfully pushed to the database.');
  } catch (error) {
    console.error('Error pushing cities data:', error);
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}

// Invoke function to push cities data to the database
pushCitiesToDatabase();
