import React from "react";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { PiOfficeChairDuotone } from "react-icons/pi";
import { PiStorefrontDuotone } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";
import { FaArrowLeftLong } from "react-icons/fa6";

import styles from "@/modules/styles/card/route.module.css";
import { sp } from "@/utils/replaceNumber";
import { ProfileTypes } from "@/models/interface/ProfileTypes";

interface CardProps {
  data: ProfileTypes;
}


const Card = ({ data }: CardProps) => {
  const { title, category, location, price } = data;

  const icons = {
    store: <PiStorefrontDuotone />,
    apartment: <PiBuildingApartmentFill />,
    office: <PiOfficeChairDuotone />,
    villa: <AiOutlineHome />,
  };

  return (
    <section className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <div className={styles.location}>
        <TiLocation />
        {location}
      </div>
      <span className={styles.price}>{ price && sp(price)} تومان</span>

      <div className={styles.footer}>
        <span>مشاهده آگهی</span>
        <FaArrowLeftLong />
      </div>
    </section>
  );
};

export default Card;
