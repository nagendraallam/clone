import React from "react";

export default function Window(props) {
  return (
    <div className=" w-[40vw] sm:w-[20vw] overflow-auto mt-2 pl-2 pr-2">
      <img className="" src={props.imageLink} alt="movie poster" />
    </div>
  );
}
