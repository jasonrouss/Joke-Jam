import React from "react";
import Loader from "react-loader-spinner";
const Spinner = ({ spinMessage }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        className="m-5"
      />
      <p className="text-lg text-center px-2">
          {spinMessage}
      </p>
    </div>
  );
};

export default Spinner;
