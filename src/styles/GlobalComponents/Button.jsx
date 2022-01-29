import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { ButtonBack, ButtonFront } from "./index";

const Button = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ButtonBack
      alt={props.alt}
      form={props.form}
      disabled={props.disabled}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {props.children}
      <ButtonFront
        alt={props.alt}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </ButtonFront>
    </ButtonBack>
  );
};

export default Button;
