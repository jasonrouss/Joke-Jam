import React from "react";
import moment from "moment";

const JokeCard = ({ joke }) => {
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
      <div className=" flex justify-between ">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {joke.title}
        </h3>
        <div>
          <img
            src={joke.category}
            alt=""
          />
        </div>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {joke.text}
      </p>
      <div className=" flex justify-between mt-4  text-slate-300">
        <div>{moment(joke.createdAt).fromNow()}</div>

        <div> {joke.creator}</div>
      </div>
    </div>
  );
};

export default JokeCard;
