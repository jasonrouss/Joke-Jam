import express from 'express';

import {getJokes, createJoke,updateJoke,deleteJoke} from "../controllers/jokes.js";

const router = express.Router();



router.get('/', getJokes);
router.post('/', createJoke);
router.patch("/:id", updateJoke);

router.delete("/:id", deleteJoke);

export default router;
