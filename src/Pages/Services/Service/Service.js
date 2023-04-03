import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { name, img, body, id } = service;

  return (
    <div className="col d-flex justify-content-around">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{body.slice(0, 55)}.</p>
          <button onClick={() => navigate(`/service/${id}`)} className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
