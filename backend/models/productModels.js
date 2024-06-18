import mongoose from "mongoose";

const { Schema } = mongoose;

const pastrySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

const Pastry = mongoose.models.pastry || mongoose.model("pastry", pastrySchema);

export default Pastry;