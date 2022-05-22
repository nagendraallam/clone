import React, { useEffect, useState } from "react";
import UserSelect from "./UserSelect";
import Home from "./HomePage";

export default function Netflix() {
  const [userSelected, setUserSelected] = useState(false);

  useEffect(() => {
    document.getElementById("titleLogo").href = "/clone/images/n.png";
    document.title = "Netflix";
  });

  return (
    <div className="h-screen">
      {userSelected ? (
        <Home />
      ) : (
        <UserSelect
          selected={() => {
            setUserSelected(true);
          }}
        />
      )}
    </div>
  );
}
