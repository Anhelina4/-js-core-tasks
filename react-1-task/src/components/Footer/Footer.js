import React from "react";
const footerStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  margin: "20px",
};
const yearStyle = {
  position: "absolute",
  bottom: 0,
  right: 0,
  margin: "20px",
};
let date = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer style={footerStyle}>&copy; Sydney Opera house </footer>
      <div style={yearStyle}> {date}</div>
    </div>
  );
};

export default Footer;
