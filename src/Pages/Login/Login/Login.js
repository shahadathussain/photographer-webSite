import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
  const { googleSignIn, githubSignIn, handleLogin } = useFirebase();

  return (
    <div className="container">
      <div className="col-md-8 mx-auto col-lg-5 pt-2 p-5 border rounded-3 bg-light">
        <form onSubmit={handleLogin}>
          <h2 className="fw-bold mb-3 text-center">Sign in</h2>

          <div className="mb-2">
            <label className="mb-1" htmlFor="floatingInput">
              Email address
            </label>
            <input type="email" className="form-control" name="email" />
          </div>

          <div className="mb-2">
            <label className="mb-1" htmlFor="floatingPassword">
              Password
            </label>
            <input type="password" className="form-control" name="password" />
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>

          <Link to="/registered" className="text-center d-block mt-2 text-decoration-none">
            Create a new account?
          </Link>

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

export default Login;
