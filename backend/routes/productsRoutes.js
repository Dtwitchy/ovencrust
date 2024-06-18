import express from "express";
import { addProduct, listProducts, removeProduct } from "../controllers/productController.js";
import multer from "multer";

const productsRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

productsRouter.post("/add", upload.single("image"), addProduct);
productsRouter.get("/list", listProducts);
productsRouter.post("/remove", removeProduct);

export default productsRouter;
