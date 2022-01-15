import axios from "axios";

const url = "http://localhost:5000/jokes";

export const updateJoke = (id, updatedJoke) =>
  axios.patch(`${url}/${id}`, updatedJoke);

export const fetchJokes= () => axios.get(url);
export const createJoke = (newJoke) => axios.post(url, newJoke);
export const deleteJoke = (id) => axios.delete(`${url}/${id}`);
