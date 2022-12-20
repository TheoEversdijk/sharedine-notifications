import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// import { function } from "../controllers/notifyController.js"

/**
 * All notification router
 */
router.options('/', (req, res, next) => {
    res.header({
        allow: 'GET, POST, OPTIONS', 
        'Content-Type': 'application/json', 
        Data: Date.now(), 
        'Content-length': 0,
    });
    res.sendStatus(200);
});

// router.get('/', getFunction)

export default router