import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: "Authorization token not provided. Please log in again." });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = token_decode.id; // Attach userId to req object for future middleware/routes
        next();
    } catch (error) {
        console.error("JWT verification error:", error);
        return res.status(401).json({ success: false, message: "Invalid token. Please log in again." });
    }
};

export default authMiddleware;