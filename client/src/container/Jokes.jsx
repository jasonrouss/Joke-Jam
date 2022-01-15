import React from "react";
import Navbar from "../components/Navbar";
import JokeCard from "../components/JokeCard";
import { useSelector } from "react-redux";

const Jokes = ({ joke, setCurrentId }) => {
  const jokes = useSelector((state) => state.jokes);

  return (
    <div className="px-2 md:px-5">
      <Navbar />
     

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">  
      {jokes.map((joke) => (
       
 
   <JokeCard joke={joke} setCurrentId={setCurrentId} />
 
      ))}
       </div>

    
    </div>
  );
};

export default Jokes;
