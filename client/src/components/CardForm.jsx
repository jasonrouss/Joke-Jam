import React, { useState, useEffect } from "react";
import { categories } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { createJoke, updateJoke } from "../actions/jokes";
import { useNavigate } from "react-router-dom";

const CardForm = ({ currentId, setCurrentId }) => {
  const [jokeData, setJokeData] = useState({
    title: "",
    text: "",
    creator: "",
    category: "",
  });
  const navigate = useNavigate();

  const joke = useSelector((state) =>
    currentId ? state.jokes.find((text) => text._id === currentId) : null
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (joke) setJokeData(joke);
  }, [joke]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0 && checkFields()) {
      dispatch(createJoke(jokeData));
      navigate("/");
    } else {
      dispatch(updateJoke(currentId, jokeData));
      console.log(dispatch(updateJoke(currentId, jokeData)))
    }
  };
  //function checkFields that checks that user filled the fields of title text creator and category before submitting if not all the fiels are filled alert to fill the fields and
  //if all the fields are filled submit the joke to the database
  const checkFields = () => {
    if (
      jokeData.title === "" ||
      jokeData.text === "" ||
      jokeData.creator === ""
    ) {
      alert("Please fill all the fields");
    } else {
      return true;
    }
  };

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center mt-5 lg:h-4/5"
    >
      <div className="flex lg:flex-row   flex-col justify-center items-center bg-neutral-800 lg:p-5 p-3 lg:w-4/5  w-full">
        <div className="flex flex-1  flex-col gap-6 lg:pl-5 mt-5 w-full">
          <input
            value={jokeData.title}
            name="title"
            onChange={(e) =>
              setJokeData({ ...jokeData, title: e.target.value })
            }
            type="text"
            placeholder="Add your title"
            className="outline-none text-2xl w-4/5 rounded-lg bg-neutral-700 sm:text-3xl font-bold text-slate-300  p-2  border border-solid border-neutral-900"
          />

          <textarea
            name="text"
            value={jokeData.text}
            onChange={(e) => setJokeData({ ...jokeData, text: e.target.value })}
            className="
        form-control
        block
        w-4/5
        px-3
        py-1.5
        text-xl
        sm:text-2xl
        text-slate-300
        bg-neutral-700
        border border-solid border-neutral-900
        rounded
      
       
          focus:border-neutral-900 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
          ></textarea>
          <input
            name="creator"
            value={jokeData.creator}
            onChange={(e) =>
              setJokeData({ ...jokeData, creator: e.target.value })
            }
            type="text"
            placeholder="Add your nickname"
            className="outline-none text-lg w-4/5 rounded-lg bg-neutral-700 sm:text-3xl font-bold text-slate-300  p-2  border border-solid border-neutral-900"
          />

          <div className="flex flex-col">
            <div>
              <select
                onClick={(e) =>
                  setJokeData(
                    { ...jokeData, category: e.target.value },
                    console.log(jokeData)
                  )
                }
                className="outline-none w-4/5 bg-neutral-700  border border-solid border-neutral-900 text-slate-300 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value="other" className="   bg-neutral-700">
                  Select category
                </option>
                {categories.map((item) => (
                  <option
                    key={item.id}
                    className="text-base border-0 outline-none capitalize bg-neutral-700 text-gray-300 p-4"
                    value={item.image}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end items-end mt-5">
              <button
                type="submit"
                className="bg-teal-800 text-white font-bold p-2 rounded-full w-28 outline-none"
              >
                Add Joke
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CardForm;
