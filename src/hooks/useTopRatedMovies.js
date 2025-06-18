import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import {
  API_OPTIONS,
  POPURAR_MOVIES_API_URL,
  TOP_RATED_MOVIES_API_URL,
} from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API_URL, API_OPTIONS);
    const json = await data.json();
    // console.log("TOP_RATED", json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
// This custom hook fetches the now playing movies from the API and dispatches them to the Redux store.
