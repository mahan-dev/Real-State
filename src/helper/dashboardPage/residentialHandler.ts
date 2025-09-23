import axios from "axios";
import React, { SetStateAction } from "react";

interface residentialProps {
  setCounter: React.Dispatch<SetStateAction<number>>;
}
export const residentialHandler = async ({ setCounter }: residentialProps) => {
  try {
    const { data } = await axios("api/total-residential-number");
    setCounter(data.data as number);
  } catch {
    console.log("error");
  }
};
