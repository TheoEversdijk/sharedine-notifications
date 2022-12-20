import express from 'express';
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

router.get('/', (req, res, next) => {
    res.json('Connection with notifications microservice made');
  });

router.get('/register', registerNotification)
router.get('/remove', removeNotification)
router.get('/edit', editNotification)

export default router;