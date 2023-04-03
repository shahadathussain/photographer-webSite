import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceContext } from "../../../App";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [services] = useContext(ServiceContext);

  const service = services.find((service) => service.id == id);

  return (
    <div className="col-md-9 col-lg-6 mx-auto">
      <div className="card text-center" width={50}>
        <img src={service?.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{service?.name}</h5>

          <p className="card-text h5">Price: ${service?.price}</p>
          <p className="card-text">{service?.body}</p>
          <button onClick={() => navigate(-1)} className="btn btn-dark w-50">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
