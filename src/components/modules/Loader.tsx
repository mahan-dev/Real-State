import React, { JSX } from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = (): JSX.Element => {
  return (
    <>
      <ThreeDots
        height="80"
        width="80"
        color="#f97316"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "auto" }}
      />
    </>
  );
};

export default Loader;
