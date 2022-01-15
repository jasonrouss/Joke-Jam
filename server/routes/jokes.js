import express from 'express';

import {getJokes, createJoke} from "../controllers/jokes.js";

const router = express.Router();



router.get('/', getJokes);
router.post('/', createJoke);

export default router;
