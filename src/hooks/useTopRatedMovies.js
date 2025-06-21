import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import {
  API_OPTIONS,
  POPURAR_MOVIES_API_URL,
  TOP_RATED_MOVIES_API_URL,
} from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API_URL, API_OPTIONS);
    const json = await data.json();
    // console.log("TOP_RATED", json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
// This custom hook fetches the now playing movies from the API and dispatches them to the Redux store.
