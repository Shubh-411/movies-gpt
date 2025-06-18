import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6  text-white">
      <h2 className="text-3xl py-4">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex w-max">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
