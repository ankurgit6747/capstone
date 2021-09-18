import React, { useEffect } from "react";
import love from "../svg/love.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Image } from "react-bootstrap";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const contentStyle = {
  marginLeft: "1300px",
  marginTop: "-60px",
  cursor: "pointer",
};

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div>
      <footer class="p-5  text-black text-center position-relative">
        <div class="container">
          <Image
            data-aos="zoom-out-down"
            className="love"
            width={200}
            src={love}
          />
          <hr />
          <p class="lead">
            Copyright &copy; 2021 Hack ur Career | Rights reserved
          </p>
          <div style={contentStyle} onClick={() => window.scroll(0, 0)}>
            <ArrowCircleUpIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
