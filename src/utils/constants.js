export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg";

export const MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPURAR_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

//api.themoviedb.org/3/movie/popular
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;

export const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_KEY;
