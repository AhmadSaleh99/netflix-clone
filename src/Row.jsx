import axios from "./Axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
const Row = ({ title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
