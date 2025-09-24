import axios from "axios";

export const residentialHandler = async () => {
  try {
    const { data } = await axios("api/profile");
    console.log(data)
    return  data.profileLength.length;
  } catch {
    console.log("error");
  }
};
