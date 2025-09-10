import React from "react";
import { FaRegCircle } from "react-icons/fa6";

interface ServicesProps {
  data: string[];
}

const Services = ({ data }: ServicesProps) => {
  return (
    <>
      {data.map((item) => (
        <li key={item}>
          <FaRegCircle />
          {item}
        </li>
      ))}
    </>
  );
};

export default Services;
