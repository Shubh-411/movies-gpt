import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  // Show nothing or a loader until movies are ready
  if (!movies?.nowPlayingMovies) {
    return null; // or <div>Loading...</div>
  }
  if (!movies?.popularMovies) {
    return null; // or <div>Loading...</div>
  }
  if (!movies?.topRatedMovies) {
    return null; // or <div>Loading...</div>
  }
  if (!movies?.upcomingMovies) {
    return null; // or <div>Loading...</div>
  }
  return (
    <div className="bg-black">
      <div className="-mt-80 relative z-20">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Top-Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
