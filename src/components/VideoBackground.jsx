import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  // const { trailerVideo } = useMovieTrailer({ movieId });
  useMovieTrailer({ movieId });
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&playsinline=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        // title="YouTube video player"
        allow="autoplay; fullscreen"
        // allowFullScreen
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground;
