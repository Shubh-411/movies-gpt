import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS, POPURAR_MOVIES_API_URL } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(POPURAR_MOVIES_API_URL, API_OPTIONS);
    const json = await data.json();
    // console.log("Popular", json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
// This custom hook fetches the now playing movies from the API and dispatches them to the Redux store.
