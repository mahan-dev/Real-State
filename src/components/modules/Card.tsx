import React from "react";
import { Profiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";

import { PiBuildingApartmentFill } from "react-icons/pi";
import { PiOfficeChairDuotone } from "react-icons/pi";
import { PiStorefrontDuotone } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";

import styles from "@/modules/styles/card/route.module.css";
import { sp } from "@/utils/replaceNumber";

interface CardProps {
  data: Profiles;
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
      <span className={styles.price}>{sp(price)} تومان</span>
    </section>
  );
};

export default Card;
