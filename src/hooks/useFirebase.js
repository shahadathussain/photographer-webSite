import { useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const useFirebase = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  /* googleSignin */
  /* ========================== */
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        navigate("/home");
        setUser(user);
      })
      .catch((error) => {
        //error-message
        setError(error);
      });
  };

  /* githubSignin */
  /* ========================== */
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        const user = res.user;
        navigate("/home");
        setUser(user);
      })
      .catch((error) => {
        //error-message
        setError(error);
      });
  };

  /* manage user */
  /* ========================== */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  /* Sign out */
  /* ========================== */
  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };

  /* signInWithEmailAndPassword */
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        navigate("/home");
        setUser(user);
      })
      .catch((error) => {
        //error-message
        setError(error);
      });
  };

  return {
    user,
    error,
    googleSignIn,
    githubSignIn,
    handleSignOut,
    handleLogin,
  };
};

export default useFirebase;
