import { PiBuildingApartmentFill } from "react-icons/pi";
import { PiOfficeChairDuotone } from "react-icons/pi";
import { PiStorefrontDuotone } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";

const services = ["خرید", "فروش", "رهن", "اجاره"];
const cities = [
  "تهران",
  "سنندج",
  "کرمانشاه",
  "اهواز",
  "مشهد",
  "اصفهان",
  "شیراز",
  "خرم آباد",
];

const categories = {
  apartment: "آپارتمان",
  villa: "ویلا",
  store: "مغازه",
  office: "دفترکار",
};

export const icons = {
  store: <PiStorefrontDuotone />,
  apartment: <PiBuildingApartmentFill />,
  office: <PiOfficeChairDuotone />,
  villa: <AiOutlineHome />,
};

export { services, cities, categoryCard, categories };
