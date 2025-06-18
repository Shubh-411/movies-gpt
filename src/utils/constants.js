export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjJmNDhmYzI1MjQ5YzNlN2I4ZWFiYzEzMjEyMGY1NCIsIm5iZiI6MTc1MDEzNDI1MS4xODU5OTk5LCJzdWIiOiI2ODUwZWRlYjA4ZTlhMzYyNjBlN2I3NTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dtpjlMIuBpaLWkAMCJkOvbl9zq7oPJVFYbL_c2GKvUA",
  },
};

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
