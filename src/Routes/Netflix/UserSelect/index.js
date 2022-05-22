import React, { useEffect, useState } from "react";
import Users from "./Users";
import { user } from "../../../Data/netflixData";

export default function User(props) {
  const [selected, setSelected] = useState(true);
  const [keyboardSelection, setKeyboardSelection] = useState(0);
  var timeout;

  useEffect(() => {
    document.body.style.backgroundColor = "#141414";
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        setKeyboardSelection((num) => {
          if (num === 0) {
            return user.length - 1;
          } else {
            return num - 1;
          }
        });
      } else if (e.key === "ArrowRight") {
        setKeyboardSelection((num) => {
          if (num === user.length - 1) {
            return 0;
          } else {
            return num + 1;
          }
        });
      }
    });
  }, []);

  return (
    <div className="overflow-hidden w-screen h-fit flex flex-col bg-[#141414] ">
      <div className="flex flex-row justify-center sm:justify-start">
        <img
          className="w-24 sm:ml-11"
          src="/clone/images/netflix.png"
          alt="logo"
        />
      </div>
      <div className="animate-[dropDown_0.3s_ease-in-out] h-full flex flex-col mt-20 items-center">
        <h1 className="text-white text-2xl md:text-2xl xl:text-4xl">
          Who's Watching?
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-5 mt-9">
          {user.map((user, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  props.selected();
                }}
              >
                <Users
                  user={user.user}
                  image={user.image}
                  selected={index === keyboardSelection && selected}
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
              </div>
            );
          })}
        </div>
        <div className="border mb-10 mt-10 border-gray-400 text-gray-400 pl-8 pr-8 pt-1 pb-1 sm:mt-40 sm:pt-2 sm:pb-2 sm:pr-16 sm:pl-16 text-lg md:text-xl hover:cursor-pointer hover:border-white hover:text-white">
          Manage Profiles
        </div>
      </div>
    </div>
  );
}
