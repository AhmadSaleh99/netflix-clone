import axios from "./Axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://t4.ftcdn.net/jpg/03/03/12/37/360_F_303123713_D396PWXkVS4pLX9ucYwsRa8X3ybyMJFP.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          esse? Quas, hic. Quae ad modi accusantium exercitationem error quidem
          ipsam vero quam quas temporibus laborum perferendis at, aperiam nihil
          voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis veniam, obcaecati totam iure debitis fugiat tempora ratione
          temporibus similique? Aut sapiente quae repellendus ipsam nobis harum
          in vitae sunt! Quod! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatem, nihil voluptatum. Eveniet pariatur earum
          neque odit repellat, sapiente vero eum natus laboriosam, mollitia
          provident error excepturi ullam voluptas eos dolores.`,
            150
          )}
        </h1>
      </div>
      <div className="banner__fadeButton" />
    </header>
  );
};

export default Banner;
