import React from "react";
import { FooterStyle } from "../../style/layout/Footer";

const Footer = () => {
  const { Footer } = FooterStyle;

  return (
    <Footer>
      Challenge by Challenge by{" "}
      <a
        rel="noreferrer"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/lauriselvijs/"
      >
        Lauris
      </a>
      .
    </Footer>
  );
};

export default Footer;
