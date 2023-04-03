import React, { useContext, useEffect } from "react";
import Service from "../../Services/Service/Service";
import { ServiceContext } from "../../../App";

const Services = () => {
  const [services, setServices] = useContext(ServiceContext);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h2 className="pb-2 mb-4 text-center display-5">Services</h2>
      <div className="row g-4">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
