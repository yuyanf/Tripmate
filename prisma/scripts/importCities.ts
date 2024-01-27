// Import necessary dependencies
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';

interface City {
  name: string;
  lat: string;
  lng: string;
  country: string;
}

// Initialize Prisma client
const prisma = new PrismaClient();

// Define function to push data to the database
async function pushCitiesToDatabase() {
  try {
    // Read the cities data from the JSON file
    const cities: City[] = JSON.parse(
      await fs.readFile('../data/cities.json', 'utf-8')
    );

    // Iterate through the array of city objects
    for (const cityData of cities) {
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
