import express from "express";

import PostJokes from "../models/postJokes.js";
const router = express.Router();

export const getJokes = async (req, res) => {
    try {
      const postJokes = await PostJokes.find();
  
      res.status(200).json(postJokes);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  export const getJoke = async (req, res) => {
    const { id } = req.params;
  
    try {
      const joke = await PostJokes.findById(id);
  
      res.status(200).json(joke);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  export const createJoke = async (req, res) => {
    const { title, text,  creator ,category} = req.body;
  
    const newPostJokes = new PostJokes({
      title,
      text,
     
      creator,
      category
    });
  
    try {
      await newPostJokes.save();
  
      res.status(201).json(newPostJokes);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  export default router;