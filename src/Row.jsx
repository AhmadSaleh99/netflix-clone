import axios from "./Axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState();

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie) => (
          <div className="movie_card" key={movie.id}>
            <img
              className={`row__poster ${isLarge && "row__posterLarge"}`}
              key={movie.id}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <div className={`movie_details ${isLarge && "movie_detailsLarge"}`}>
              <p className="movie_name" key={movie.id}>
                {`Movie: ${
                  movie?.original_name || movie?.name || movie?.title
                }`}
              </p>
              <p>
                {" "}
                <span>Date : </span>{" "}
                {movie?.first_air_date || movie?.release_date}
              </p>
              <p>
                {" "}
                <span>Vote Average :</span> {movie?.vote_average}/10
              </p>
              <p>
                {" "}
                <span>Vote Count : </span>
                {movie?.vote_count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;

// <div className={`cont  ${isLarge ? "l" : "s"}`}>
//   <img
//     onClick={() => handleOnClick(movie?.id)}
//     className={`row__poster ${isLarge && "l"}`}
//     key={movie?.id}
//     src={`${baseURL}${isLarge ? movie.poster_path : movie?.backdrop_path}`}
//     alt={movie?.name}
//   />
//   <div className={`row_details ${isLarge ? "bigDiv" : "smallDiv"}`}>
//     <p className="row_details-title">
//       {movie?.original_name || movie?.name || movie?.title}
//     </p>
//     <p>
//       {" "}
//       <span>Date : </span> {movie?.first_air_date || movie?.release_date}
//     </p>
//     <p>
//       {" "}
//       <span>Vote Average :</span> {movie?.vote_average}/10
//     </p>
//     <p>
//       {" "}
//       <span>Vote Count : </span>
//       {movie?.vote_count}
//     </p>
//   </div>
// </div>;
