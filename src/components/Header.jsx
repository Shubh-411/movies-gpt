import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"; // Adjust the import path as necessary
const Header = () => {
  const navigate = useNavigate();
  // Accessing the user state from Redux store
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign out error:", error);
        // navigate("/error");
      });
  };

  // Here we set up an effect to listen for authentication state changes
  // This will allow us to respond to user sign-in and sign-out events
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // Cleanup the listener or Unsubscribe  on component unmount
  }, []);
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />
      {user && (
        <div className="flex items-center text-white font-bold">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={user?.photoURL}
            alt="user-avatar"
          />
          <button className="cursor-pointer" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
