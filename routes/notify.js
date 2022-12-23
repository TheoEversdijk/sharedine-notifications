import express from 'express';
import bodyParser from 'body-parser';
import { registerNotification, removeNotification, editNotification } from "../controllers/notifyController.js"

const router = express.Router();

router.options('/', (req, res, next) => {
    res.header({
        allow: 'GET, POST, OPTIONS',
        'Content-Type': 'application/json',
        Data: Date.now(),
        'Content-length': 0,
    });
    res.sendStatus(200);
});

const jsonParser = bodyParser.json();

router.get('/', (req, res, next) => {
    res.json('Connection with notifications microservice made');
});

router.get('/register', jsonParser, registerNotification)
router.get('/remove', jsonParser, removeNotification)
router.get('/edit', jsonParser, editNotification)

export default router;