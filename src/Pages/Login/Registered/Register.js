import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.init";
import { toast } from "react-hot-toast";

const Register = () => {
  const { googleSignIn, githubSignIn } = useFirebase();
  const navigate = useNavigate();

  /* sume error */
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confiramPassword, setConfiramPassword] = useState({ value: "", error: "" });

  const handleEmail = (e) => {
    if (/^\S+@\S+\.\S+$/.test(e)) {
      setEmail({ value: e, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid your email!" });
    }
  };

  const handlePassword = (e) => {
    if (e.length < 7) {
      setPassword({ value: "", error: "Password is short" });
    } else {
      setPassword({ value: e, error: "" });
    }
  };

  const handleConfiramPassword = (e) => {
    if (e === password.value) {
      setConfiramPassword({ value: e, error: "" });
    } else {
      setConfiramPassword({ value: "", error: "Password didn't match!" });
    }
  };

  /* password authentication */
  /* ========================== */
  const handleUserRegister = (e) => {
    e.preventDefault();

    if (email.value === "") {
      setEmail({ value: "", error: "Email is required!" });
    }

    if (password.value === "") {
      setPassword({ value: "", error: "Password is required!" });
    }

    if (confiramPassword.value === "") {
      setConfiramPassword({ value: "", error: "Confiram password is required!" });
    }

    if (email.value && password.value && confiramPassword.value === password.value) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
          const user = res.user;
          console.log(user);
          toast.success("User Created", { id: "success" });
          navigate("/home");
        })
        .catch((error) => {
          //error-message
          const errorMessage = error.message;
          if (errorMessage.includes("email-already-in-use")) {
            toast.error("User already exist", { id: "error" });
          } else {
            toast.error(errorMessage, { id: "error" });
          }
          console.error(error);
        });
    }
  };

  return (
    <div className="container">
      <div className="col-md-8 mx-auto col-lg-5 pt-2 p-5 border rounded-3 bg-light">
        <form onSubmit={handleUserRegister}>
          <h2 className="fw-bold mb-3 text-center">Sign up</h2>
          <div className="mb-2">
            <label className="mb-1" htmlFor="floatingInput">
              Email address
            </label>
            <input onBlur={(e) => handleEmail(e.target.value)} type="email" className="form-control" name="email" />
          </div>
          {email?.error && <p className="text-danger mt-0 mb-2">{email.error}</p>}

          <div className="mb-2">
            <label className="mb-1" htmlFor="floatingPassword">
              Password
            </label>
            <input onBlur={(e) => handlePassword(e.target.value)} type="password" className="form-control" name="password" />
          </div>

          {password?.error && <p className="text-danger mt-0 mb-2">{password.error}</p>}

          <div className="mb-2">
            <label className="mb-1" htmlFor="floatingPassword">
              Confiram Password
            </label>
            <input onBlur={(e) => handleConfiramPassword(e.target.value)} type="password" className="form-control" name="confiramPassword" />
          </div>

          {confiramPassword?.error && <p className="text-danger mt-0 mb-2">{confiramPassword.error}</p>}

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>

          <p className="text-center m-2 ">
            Already have an account?
            <Link className="text-decoration-none ms-2" to="/login">
              Sign in
            </Link>
          </p>

          <div className="d-flex">
            <hr className=" w-50" />
            <h2 className="fs-6 m-2">Or</h2>
            <hr className=" w-50" />
          </div>
        </form>

        <button onClick={() => googleSignIn()} className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
          <div className="me-5 w-100">
            <FcGoogle className="h5 m-0 me-3 bg-light rounded-5" />
            Sign in with Google
          </div>
        </button>

        <button onClick={() => githubSignIn()} className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
          <div className="me-5 w-100">
            <GoMarkGithub className="h5 m-0 me-3 rounded-5" />
            Sign in with Github
          </div>
        </button>
      </div>
    </div>
  );
};

export default Register;
