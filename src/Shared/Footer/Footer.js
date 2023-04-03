import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="py-3 my-4 border-top">
        <div className="text-center">
          <span className="mb-3 mb-md-0">&copy; {year}</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
