import axios from "axios";

const url = "http://localhost:5000/jokes";


export const fetchJokes= () => axios.get(url);
export const createJoke = (newJoke) => axios.post(url, newJoke);