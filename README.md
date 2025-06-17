# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Steps that I've taken to build this app:

==> To install react using Vite :

# npm create vite@latest my-react-app --template react

# Configure tailwind-CSS inside it.

# Features:

- Login/SignUp
  - Sign-In/ Sign-Up form
  - redirect to Browse Page
- Browse (Page after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title and Description
    - Movies List \* N
- MoviesGPT page
  - Search Bar
  - Movies Suggestions

# Done:

- Vite react app
- Configured Tailwind CSS
- Routing of App
- Header
- Build Login Form
- Sign Up form
- Form Validation
- useRef Hook
- Setting Up firebase
  - npm install firebase
  - npm install -g firebase-tools
  - firebase login
  - firebase init
  - firebase deploy
- Deploying app to production
- Create SignUp in firebase
- Implemented Sign in user API
- Created Redux Store with User Slice
- implement Sign OUt
- Updated profile
- Bug Fix: Sign Up user DisplayName and profile picture update
- Bug Fix : If the user is not logged in, Redirect /browse to login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- TMDB works only with Airtel HotSpot or Airtel-WIFI
- Fetch Movies from TMDB movies -- Register for TMDB API and create an app and get access token
- Get Data from TMDB now playing movies list API
- Custom hook for Now Playing movies
- Create MovieSlice
- Update store with movies data
- Planning for Maincontainer and Secondary container
- Fetch data for Trailer video
- Update store for Trailer video data
- Embededd the Youtube video as Background and make it autoplay and mute
- Tailwind classes to make main container look awesome
