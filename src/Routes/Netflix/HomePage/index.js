import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

export default function Home() {
  const [discover, setDiscover] = useState([]);
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});

  useEffect(() => {
    document.body.style.backgroundColor = "#141414";
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=df443c594e7ca520831be097f9d6aec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        setDiscover(res.data.results);
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${res.data.results[0].id}/videos?api_key=df443c594e7ca520831be097f9d6aec8&language=en-US`
          )
          .then((res) => {
            setFirst({ ...res.data.results[0], videos: res.data.results });
          })
          .catch((err) => {});
      })
      .catch((err) => {});

    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=df443c594e7ca520831be097f9d6aec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2"
      )
      .then((res) => {
        setSecond(res.data.results);
      })
      .catch((err) => {});

    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=df443c594e7ca520831be097f9d6aec8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3"
      )
      .then((res) => {
        setThird(res.data.results);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="bg-[#141414] h-screen -z-10">
      <iframe
        className="w-full absolute h-[30vh] sm:h-[100vh]"
        src={
          first.videos &&
          `https://www.youtube.com/embed/${first.videos[0].key}?rel=0&autoplay=1&controls=0`
        }
      ></iframe>
      <div className="flex h-fit absolute flex-col z-30">
        <Navbar />
        <div>
          <h2 className="text-white mt-[30vh] sm:mt-[90vh] sm:text-2xl sm:pl-[20vh] pl-3">
            Popular on netflix
          </h2>
          <div className="flex flex-row overflow-auto sm:pl-[5vw] ">
            {discover.map((movie, index) => {
              return (
                <img
                  key={index + "1"}
                  className="w-[40vw] sm:w-[20vw] mt-2 pl-2 pr-2"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="movie poster"
                />
              );
            })}
          </div>

          <h2 className="text-white mt-[30vh] sm:mt-[2vh] sm:text-2xl sm:pl-[20vh] pl-3">
            Trending Now
          </h2>
          <div className="flex flex-row overflow-auto ">
            {discover.map((movie, index) => {
              return (
                <img
                  key={index + "2"}
                  className="w-[40vw] sm:w-[20vw] mt-2 pl-2 pr-2"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt="movie poster"
                />
              );
            })}
          </div>
          <h2 className="text-white mt-[30vh] sm:mt-[2vh] sm:text-2xl sm:pl-[5vh] pl-3">
            Continue wawtching for Nagi
          </h2>
          <div className="flex flex-row overflow-auto ">
            {discover.map((movie, index) => {
              return (
                <img
                  key={index + "3"}
                  className="w-[40vw] sm:w-[20vw] mt-2 pl-2 pr-2"
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
