import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

export default function Home() {
  const [discover, setDiscover] = useState([]);
  const [first, setFirst] = useState({});

  useEffect(() => {
    document.body.style.backgroundColor = "#141414";
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=df443c594e7ca520831be097f9d6aec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        console.log(res.data);
        setDiscover(res.data.results);
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${res.data.results[0].id}/videos?api_key=df443c594e7ca520831be097f9d6aec8&language=en-US`
          )
          .then((res) => {
            console.log(res.data);
            setFirst({ ...res.data.results[0], videos: res.data.results });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {}, [first]);

  return (
    <div className="bg-[#141414] h-screen -z-10">
      <iframe
        className="w-full absolute h-[30vh] sm:h-[100vh]"
        src={
          // first.videos &&
          `https://www.youtube.com/embed/YXN7zxjNWSg?rel=0&autoplay=1&controls=0`
        }
      ></iframe>
      <div className="flex h-fit absolute flex-col z-30">
        <Navbar />
        <div>
          <h2 className="text-white mt-[30vh] sm:mt-[80vh] sm:text-2xl sm:ml-[5vh] ml-3">
            Popular on netflix
          </h2>
          <div className="flex flex-row container overflow-scroll sm:ml-[5vh] box-content pr-3">
            {discover.map((movie) => {
              return (
                <img
                  className="w-[40vw] sm:w-[20vw] mt-2 ml-2 mr-2"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="movie poster"
                />
              );
            })}
          </div>
          <h2 className="text-white mt-[1vh] sm:mt-[2vh] sm:text-2xl sm:ml-[5vh] ml-3">
            Trending Now
          </h2>
          <div className="flex flex-row w-[95vw] container overflow-scroll sm:ml-[5vh] box-content pr-3">
            {discover.map((movie) => {
              return (
                <img
                  className="w-[40vw] sm:w-[20vw] mt-2 ml-2 mr-2"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="movie poster"
                />
              );
            })}
          </div>
          <h2 className="text-white mt-[1vh] sm:mt-[2vh] sm:text-2xl sm:ml-[5vh] ml-3">
            Continue watching for Nagi
          </h2>
          <div className="flex flex-row  container overflow-scroll sm:ml-[5vh] box-content pr-3">
            {discover.map((movie) => {
              return (
                <img
                  className="w-[40vw] sm:w-[15vw] mt-2 ml-2 mr-2"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="movie poster"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
