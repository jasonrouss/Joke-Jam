import React,{useState,useEffect}  from "react";
import {Routes,Route} from "react-router-dom";
import CreateJoke from "./container/CreateJoke";
import Home from "./container/Home";
import { useDispatch } from 'react-redux';
import { getJokes } from './actions/jokes';
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getJokes());
  }, [currentId, dispatch]);

  
  return (
    <Routes>
      <Route path="/*" element={ <Home setCurrentId={setCurrentId}/>}/>
      <Route path="/create" element={ <CreateJoke currentId={currentId} setCurrentId={setCurrentId}/>}/>
    </Routes>
  
  );
};

export default App;
