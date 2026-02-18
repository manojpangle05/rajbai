import mongoose, { Types } from "mongoose";
import { Category } from "./ProdcategoryModel.js";

var brandSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true,
        uppercase: true,
    },
    image: {
      type: String,
      required: true,
    },
}, { timestamps: true, collection: 'brand' })


export default mongoose.model<Category>('Brand', brandSchema)
