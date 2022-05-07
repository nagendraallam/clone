import React, { useEffect, useState } from "react";
import Users from "./Users";
import { user } from "../../../Data/netflixData";

export default function User() {
  const [selected, setSelected] = useState(true);
  const [keyboardSelection, setKeyboardSelection] = useState(0);
  var timeout;

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        setKeyboardSelection((num) => {
          if (num == 0) {
            return user.length - 1;
          } else {
            return num - 1;
          }
        });
      } else if (e.key === "ArrowRight") {
        setKeyboardSelection((num) => {
          if (num == user.length - 1) {
            return 0;
          } else {
            return num + 1;
          }
        });
      }
    });
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-[#141414] ">
      <div className="flex flex-row">
        <img
          className="w-24 ml-12"
          src="/clone/images/netflix.png"
          alt="logo"
        />
      </div>
      <div className="h-full flex flex-col mt-20 items-center">
        <h1 className="text-white text-6xl">Who's Watching?</h1>
        <div className="flex flex-row justify-center items-center mt-9">
          {user.map((user, index) => {
            return (
              <Users
                key={index}
                user={user.user}
                image={user.image}
                selected={index == keyboardSelection && selected}
                onHover={() => {
                  setSelected(false);
                  clearTimeout(timeout);
                }}
                onHoverStop={() => {
                  clearTimeout(timeout);
                  timeout = setTimeout(() => {
                    setSelected(true);
                  }, 100);
                }}
              />
            );
          })}
        </div>
        <div className="border mt-40 border-gray-400 text-gray-400 pl-16 pr-16 pt-2 pb-2 text-2xl hover:cursor-pointer hover:border-white hover:text-white">
          Manage Profiles
        </div>
      </div>
    </div>
  );
}
