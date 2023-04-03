import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section className="py-5 text-center container banner-image">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="text-light display-4">Album example</h1>
            <p className="lead text-light">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <button href="#" className="btn btn-lg btn-light m-2">
                Main call to action
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
