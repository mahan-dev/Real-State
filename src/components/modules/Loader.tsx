import React, { JSX } from "react";
import { ThreeDots } from "react-loader-spinner";

interface LoaderProps {
  loader?: boolean;
}
const Loader = ({ loader }: LoaderProps): JSX.Element => {
  return (
    <>
      <ThreeDots
        height={loader ? "20" : "80"}
        width={loader ? "40" : "80"}
        color="#f97316"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "auto" }}
      />
    </>
  );
};

export default Loader;
