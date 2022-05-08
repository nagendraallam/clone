import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

export default function Home() {
  const [discover, setDiscover] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=df443c594e7ca520831be097f9d6aec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        console.log(res.data);
        setDiscover(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <Navbar className="mb-4" />
        {/* {discover.map((movie, index) => {
        return (
          <div className="text-white" key={movie.title}>
            {movie.title}
          </div>
        );
      })} */}
      </div>
      <video className="w-full h-full" zoom="1.5" autoPlay>
        <source src="/clone/video/trailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
