import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

export default function Home() {
  const [discover, setDiscover] = useState([]);
  const [first, setFirst] = useState({});

  useEffect(() => {
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

  useEffect(() => {
    console.log(first);
  }, [first]);

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
      <iframe
        className="w-full fixed h-[80vh]"
        src={
          first.videos &&
          `https://www.youtube.com/embed/${first.videos[0].key}?rel=0&autoplay=1&controls=0`
        }
      ></iframe>
    </div>
  );
}
