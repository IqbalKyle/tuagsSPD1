import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js";
import { config } from "./config.js";

dotenv.config();

const sampleProducts = [
  {
    name: "Ergonomic Office Chair",
    price: 1500000,
    image: "https://placehold.co/600x400/png",
    description: "High-quality mesh chair with lumbar support for long working hours.",
    stock: 50
  },
  {
    name: "Mechanical Keyboard RGB",
    price: 750000,
    image: "https://placehold.co/600x400/png",
    description: "Tactile switches with customizable RGB lighting and macro support.",
    stock: 120
  },
  {
    name: "Wireless Gaming Mouse",
    price: 450000,
    image: "https://placehold.co/600x400/png",
    description: "Ultra-low latency wireless mouse with high-precision sensor.",
    stock: 75
  },
  {
    name: "27-inch 4K Monitor",
    price: 4200000,
    image: "https://placehold.co/600x400/png",
    description: "IPS display with 99% sRGB color accuracy, perfect for designers.",
    stock: 20
  },
  {
    name: "USB-C Hub Multiport",
    price: 300000,
    image: "https://placehold.co/600x400/png",
    description: "7-in-1 hub with HDMI, USB 3.0, and SD card reader.",
    stock: 200
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.mongoUri);
    console.log("MongoDB connected for seeding...");

    // Clear existing data to avoid duplicates
    await Product.deleteMany({});
    console.log("Existing products cleared.");

    // Insert new data
    await Product.insertMany(sampleProducts);
    console.log("Database successfully populated with sample products.");

    process.exit();
  } catch (error) {
    console.error("Error populating database:", error);
    process.exit(1);
  }
};

seedDatabase();