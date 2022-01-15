import React from "react";
import moment from "moment";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import {deleteJoke} from "../actions/jokes"
import { useNavigate } from "react-router-dom";


const JokeCard = ({ joke,currentId,setCurrentId ,jokeData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = () => {
 setCurrentId(joke._id)


      if(joke._id === undefined){
        alert("Edit Failed")
      }
      else{
        navigate(`/create/${joke._id}`);


      }
      console.log(currentId)


    
  };

  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
      <div className=" flex justify-between ">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {joke.title}
        </h3>
        <div>
          <img src={joke.category} alt="" />
        </div>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {joke.text}
      </p>
      <div className=" flex justify-between mt-4  text-slate-300">
        <div>{moment(joke.createdAt).fromNow()}</div>

        <div> {joke.creator}</div>
      </div>
      <hr className="mt-4"></hr>
      <div className="flex   justify-around mt-6 text-slate-300">
        <button
      onClick={handleEdit}
          className="flex  px-5
        py-3 bg-teal-300 border border-teal-800 border-solid rounded-lg text-teal-800 gap-1"
        >
          <FiEdit style={{fontSize:"17,5px"}} /> Edit
        </button>
        <button
        onClick={()=> dispatch(deleteJoke(joke._id))}
          className="flex  px-5
        py-3 border bg-rose-400  border-rose-900  border-solid rounded-lg text-rose-900 gap-1 "
        >
         
          <AiFillDelete style={{fontSize:"22px"}} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default JokeCard;
