import { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    document.getElementById("titleLogo").href = "/clone/logo192.png";
    document.title = "Clone App";
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">Find links to all clone webpages</h1>
      <div className="flex flex-row">
        <Link className="btn-primary border-red-500" to="netflix">
          Netflix
        </Link>
        <Link className="btn-primary border-red-500 " to="youtube">
          Youtube
        </Link>
      </div>
    </div>
  );
}

export default App;
