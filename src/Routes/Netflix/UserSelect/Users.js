import React from "react";

export default function Users(props) {
  return (
    <div
      className={`hover:cursor-pointer flex flex-col md:ml-1 md:mr-1 ml-4 mr-4 ${
        props.selected ? "text-white" : "text-gray-400"
      } hover:text-white`}
      onMouseEnter={props.onHover}
      onMouseLeave={() => {
        props.onHoverStop();
      }}
    >
      <img
        className={`${
          props.selected ? "border-white" : "border-transparent"
        } hover:border-white border-4 w-20 md:w-28 xl:w-40 rounded-md`}
        alt="userImage"
        src={`/clone/images/${props.image}`}
      />
      <h4 className="w-20 xl:w-40 md:w-28 mt-1 text-lg md:text-xl xl:text-2xl text-center">
        {props.user}
      </h4>
    </div>
  );
}
