import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
    phone: { type: String, required: true } // Adding phone field for user contact
}, { minimize: false });

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;