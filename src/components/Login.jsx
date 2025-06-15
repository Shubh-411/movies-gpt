import React, { useState, useRef } from "react";
import Header from "./Header";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase"; // Ensure you have firebase initialized
import { useNavigate } from "react-router";
const Login = () => {
  const [isSingedIn, setIsSignedIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Using useRef to access the input values directly
  // This is useful for form inputs where you want to avoid state updates on every keystroke
  const name = useRef(null); //
  const email = useRef(null);
  const password = useRef(null);
  const photoURL = useRef(null); // Assuming you might want to use this later

  const handleClick = () => {
    //   Validate the form inputs here
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);

    if (message) return;
    // Sign In or Sign Up logic goes here
    if (!isSingedIn) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // Once signed up profile is created, update the user profile
          updateProfile(user, {
            displayName: name.current.value, // Assuming you have a name input field
            photoURL: "https://avatars.githubusercontent.com/u/72320490?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              // ...
              navigate("/browse"); // Redirect to home page after sign up
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
              // ...
            });
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage + " " + errorCode);
          // ..
        });
    } else {
      // Sign In logic
      // You can use signInWithEmailAndPassword from firebase/auth

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse"); // Redirect to home page after sign in
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage + " " + errorCode);
        });
      console.log("Sign In logic goes here");
    }
  };

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
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/90 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-6">
          {" "}
          {isSingedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg">{errorMsg}</p>
        <button
          className="p-4 my-4  bg-red-700 w-full rounded-lg cursor-pointer hover:bg-red-600 transition-all duration-300"
          onClick={handleClick}
        >
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
