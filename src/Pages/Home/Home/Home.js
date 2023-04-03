import React from "react";
import Teems from "../../OurTeam/Teems/Teems";
import Banner from "../Banner/Banner";
import Footer from "../../../Shared/Footer/Footer";
import Services from "../../Services/Services.js/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Teems />
      <Footer />
    </div>
  );
};

export default Home;
