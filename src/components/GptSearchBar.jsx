import { useRef } from "react";
import lang from "../utils/languageConst";
import { useDispatch, useSelector } from "react-redux";
// import openAi from "../utils/openAi"; // it is not working
import geminiAi from "../utils/geminiAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //   Make an API call to GPT with the searchText
    //     const gptResults = await openAi.chat.completions.create({
    //       model: "gpt-3.5-turbo",
    //       messages: [
    //         { role: "developer", content: "Talk like a pirate." },
    //         { role: "user", content: "Are semicolons optional in JavaScript?" },
    //       ],
    //     });
    //     console.log(gptResults.choices);
    //   ============== GEMINI CODE ==============

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example given ahead. Example Result: Movie1, Movie2, Movie3, Movie4, Movie5";
    const gptResults = await geminiAi.models.generateContent({
      model: "gemini-2.0-flash",
      contents: gptQuery,
    });
    //     console.log(gptResults.text);

    const gptMovies = gptResults.text.split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log("TMDB", tmdbResults);
    // dispatch(addGptMovieResult(tmdbResults));
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    ); // for passing the multiple data to single action
    //   For each movie I'll search TMDB API
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 bg-gray-300 rounded-lg shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
          className="p-4 m-4 col-span-9 border border-gray-300 rounded-md"
        />
        <button
          className="m-4 px-4 py-2 col-span-3 bg-red-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
