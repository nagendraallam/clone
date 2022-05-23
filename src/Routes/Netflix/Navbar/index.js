import React from "react";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-black absolute w-screen flex flex-row align-center text-center justify-between">
      <div className="flex flex-row">
        <img
          className="w-1/6 sm:w-20 pl-2"
          src="/clone/images/netflix.png"
          alt="netflix logo"
        />
        <h3 className="text-white pl-3 mt-6 text-[10px]">Browse 🞃</h3>
      </div>
      <img
        className="w-1/6 sm:w-20 p-4 rounded-lg"
        src="/clone/images/user1.png"
        alt="user"
      />
    </div>
  );
}
