import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  // Show nothing or a loader until movies are ready
  // if (!movies?.nowPlayingMovies) {
  //   return null; // or <div>Loading...</div>
  // }
  // if (!movies?.popularMovies) {
  //   return null; // or <div>Loading...</div>
  // }
  // if (!movies?.topRatedMovies) {
  //   return null; // or <div>Loading...</div>
  // }
  // if (!movies?.upcomingMovies) {
  //   return null; // or <div>Loading...</div>
  // }
  // Create a config array to reduce repetitive code
  const movieSections = [
    { title: "Now Playing", key: "nowPlayingMovies" },
    { title: "Top-Rated", key: "topRatedMovies" },
    { title: "Popular", key: "popularMovies" },
    { title: "Upcoming", key: "upcomingMovies" },
  ];
  // Check if all movie sections are loaded
  const isLoading = movieSections.some((section) => !movies?.[section.key]);

  if (isLoading) {
    return null; // or <div>Loading...</div>
  }
  return (
    <div className="bg-black">
      <div className="-mt-80 relative z-20">
        {/* <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Top-Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Upcoming" movies={movies?.upcomingMovies} /> */}
        {movieSections.map((section) => (
          <MovieList
            key={section.key}
            title={section.title}
            movies={movies[section.key]}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
