import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, UPCOMING_MOVIES_API_URL } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_API_URL, API_OPTIONS);
    const json = await data.json();
    console.log("UPCOMING_MOVIES", json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
// This custom hook fetches the now playing movies from the API and dispatches them to the Redux store.
