import React from "react";
import styles from "@/modules/styles/cityCard/route.module.css";
import { FaCity } from "react-icons/fa6";

interface CityProps {
  data: string[];
}

const CityCard = ({ data }: CityProps) => {
  return (
    <section className={styles.cities}>
      <h2>شهر های پربازدید</h2>

      <ul className={styles.cities__list}>
        {data.map((item) => (
          <li key={item}>
            <FaCity />
            {item}
            </li>
        ))}
      </ul>
    </section>
  );
};

export default CityCard;
