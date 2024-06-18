import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js"; // Updated from foodRoute to productRoute
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import 'dotenv/config';

// App configuration
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/products", productRouter); // Updated route for products
app.use("/images", express.static('uploads'));
app.use("/api/users", userRouter); // Updated route for users
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
    res.send("API Working perfectly");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});