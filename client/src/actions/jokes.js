import * as api from "../api/index.js";
import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionTypes.js';
export const getJokes = () => async (dispatch) => {
    try {
      const { data } = await api.fetchJokes();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const createJoke = (joke) => async (dispatch) => {
    try {
      const { data } = await api.createJoke(joke);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateJoke =(id,joke) =>  async (dispatch) =>{
    try {
  
     const {data} = await api.updateJoke(id,joke);
  
     dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  
  }
  export const deleteJoke =(id) => async (dispatch) => {
    try {
      await api.deleteJoke(id);
  
      dispatch({ type: DELETE, payload: id})
    } catch (error) {
      console.log(error)
    }
  }
  