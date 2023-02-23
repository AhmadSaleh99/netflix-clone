import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Row from "../Row";
import Nav from "../Nav";
import requests from "../Request";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* NavBar */}

      <Nav />

      {/* Banner */}

      <Banner />

      {/* Rows */}

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="COmedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
};

export default HomeScreen;
