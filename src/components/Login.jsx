import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSingedIn, setIsSignedIn] = React.useState(true);

  const toggleSignInForm = () => {
    setIsSignedIn(!isSingedIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
          alt="Netflix Background"
          srcset=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/90 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-6">
          {" "}
          {isSingedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-4  bg-red-700 w-full rounded-lg cursor-pointer hover:bg-red-600 transition-all duration-300">
          {isSingedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSingedIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
