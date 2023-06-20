import mongoose, { Schema } from "mongoose";

const Product = new Schema({

    sku: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: Array, default: [] },
    description: { type: String, required: true },
    images: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model("product", Product)