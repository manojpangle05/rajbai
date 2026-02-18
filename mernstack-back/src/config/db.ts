import mongoose from "mongoose";

const db = process.env.MONGO_URI;

if (db) {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("✅ MongoDB connection successful"))
    .catch((err) => console.log("❌ MongoDB connection failed:", err.message));
}

