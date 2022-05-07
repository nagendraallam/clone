import React, { useEffect } from "react";
import UserSelect from "./UserSelect";

export default function Netflix() {
  useEffect(() => {
    document.getElementById("titleLogo").href = "./images/n.png";
    document.title = "Netflix";
  });

  return (
    <div>
      <UserSelect />
    </div>
  );
}
