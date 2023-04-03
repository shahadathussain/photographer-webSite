import React, { useEffect, useState } from "react";
import Teem from "../Teem/Teem";

const Teems = () => {
  const [teems, setTeems] = useState([]);
  useEffect(() => {
    fetch("teem.json")
      .then((res) => res.json())
      .then((data) => setTeems(data));
  }, []);
  return (
    <div className="container">
      <h2 className="pb-2 mb-3 text-center display-5">Our Teem</h2>
      <div className="row g-4">
        {teems.map((teem) => (
          <Teem key={teem.id} teem={teem} />
        ))}
      </div>
    </div>
  );
};
export default Teems;
