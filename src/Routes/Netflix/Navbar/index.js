import React from "react";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-black  flex flex-row align-center text-center justify-between">
      <div className="flex flex-row">
        <img
          className="w-1/6 sm:w-20 ml-2"
          src="/clone/images/netflix.png"
          alt="netflix logo"
        />
        <h3 className="text-white ml-3 mt-6 text-[10px]">Browse 🞃</h3>
      </div>
      <img
        className="w-1/6 sm:w-20 p-2 rounded-lg"
        src="/clone/images/user1.png"
        alt="user"
      />
    </div>
  );
}
