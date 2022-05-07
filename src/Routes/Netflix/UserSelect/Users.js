import React from "react";

export default function Users(props) {
  return (
    <div
      className="hover:cursor-pointer flex flex-col ml-4 mr-4"
      onMouseEnter={props.onHover}
      onMouseLeave={() => {
        props.onHoverStop();
      }}
    >
      <img
        className={`${
          props.selected ? "border-white" : "border-transparent"
        } hover:border-white border-4 w-40 rounded-md`}
        alt="userImage"
        src={`/images/${props.image}`}
      />
      <h4 className="w-40 mt-1 text-2xl text-center text-[#fff]">{props.user}</h4>
    </div>
  );
}
