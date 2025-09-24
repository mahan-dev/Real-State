import axios from "axios";
import React, { SetStateAction } from "react";

interface residentialProps {
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}
export const residentialHandler = async ({ setLoading }: residentialProps) => {
  try {
    setLoading(true);
    const { data } = await axios("api/profile");
    return data.profileLength.length;
  } catch {
    console.log("error");
  } finally {
    setLoading(false);
  }
};
