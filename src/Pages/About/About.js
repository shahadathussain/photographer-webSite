import React from "react";
import Shahadat from "../../images/images/Shahadat.png";

const About = () => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <h2 className="display-5 text-center fw-bold mb-5">About me</h2>
        <div className="row featurette">
          <div className="col d-flex flex-column align-items-start gap-2 mt-5">
            <h3 className="fw-bold">Left-aligned title explaining these awesome features</h3>
            <p className="">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="btn btn-primary m-3">
              Primary button
            </a>
          </div>
          <div className="col-md-5">
            <img src={Shahadat} alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid ms-auto" width="350" height="350" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
