import React,{useState, useRef} from 'react'
import Sidebar from "../components/Sidebar";
import  Footer from "../components/Footer";
import CardForm from '../components/CardForm';
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../assets/logo.png"

const CreateJoke = ({ currentId, setCurrentId }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    // useRef is like a “box” that can hold a mutable value in its .current property.

 const scrollRef = useRef(null);

    return (
      <div>
        <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
        <div className="hidden md:flex h-screen flex-initial">
          <Sidebar  />
        </div>
        <div className="flex md:hidden flex-row">
          <div className="p-2 w-full flex flex-row justify-between items-center bg-slate-900 shadow-md">
            <HiMenu
              fontSize={40}
              className="cursor-pointer text-slate-200"
              onClick={() => setToggleSidebar(true)}
            />
            <div>
              <img src={logo} alt="logo" className="w-28" />
            </div>
            
          </div>
          {toggleSidebar && (
            <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
              <div className="absolute w-full flex justify-end items-center p-2">
                <AiFillCloseCircle
                  fontSize={30}
                  className="cursor-pointer text-slate-200"
                  onClick={() => setToggleSidebar(false)}
                />
              </div>
              <Sidebar closeToggle={setToggleSidebar}  />
            </div>
          )}
        </div>
        <div
          className="pb-2 flex-1 h-screen overflow-y-scroll  bg-slate-700	"
          ref={scrollRef}
        >
  <CardForm currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
      </div>
              <Footer/>
</div>
    )
}

export default CreateJoke
