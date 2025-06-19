import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchComp from "./GptSearchComp";
import { useSelector } from "react-redux";
const Browse = () => {
  let showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // console.log("showGptSearch", showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GptSearchComp />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
          Main Container
            - Video Background
            - Video Title
          Secondary Container
            - MoviesList * n
            - cards * n
        */}
    </div>
  );
};

export default Browse;
