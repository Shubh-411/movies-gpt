import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = ({ movieId }) => {
  //   console.log("MovieID", movieId);
  //   const [trailerId, setTrailerId] = useState(null);
  const dispatch = useDispatch(); // if using redux to store trailer video then no use os useState for trailerId

  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    //     console.log("data", json);
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredData.length ? filteredData[1] : json.results[0];
    //     console.log(trailer);
    dispatch(addTrailerVideo(trailer));
    //     setTrailerId(trailer?.key);
  };
  useEffect(() => {
    getTrailer();
  }, []);

  //   return { trailerVideo };
};

export default useMovieTrailer;
