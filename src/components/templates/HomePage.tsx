import React, { JSX } from "react";
import styles from "@/templates/styles/homePage/route.module.css";

import Services from "../modules/Services";
import CategoryCard from "@/modules/CategoryCard";
import CityCard from "@/components/modules/CityCard";

import { categories, cities, services } from "@/constants/const";

const HomePage = (): JSX.Element => {
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.banner__description}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul className={styles.description__services}>
            <Services data={services} />
          </ul>
        </div>
      </div>
      <CategoryCard data={categories} />

      <CityCard data={cities} />
    </section>
  );
};

export default HomePage;
