import React from "react";
import styles from "@/templates/styles/homePage/route.module.css";
import Services from "../modules/Services";
import CategoryCard from "@/modules/CategoryCard";
import CityCard from "@/components/modules/CityCard";

const HomePage = () => {
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

  const categoryCard = [
    { name: "villa", title: "خانه ویلایی" },
    { name: "apartment", title: "آپارتمان" },
    { name: "store", title: "مغازه" },
    { name: "office", title: "دفترکار" },
  ];

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
      <CategoryCard data={categoryCard} />

      <CityCard data={cities} />
    </section>
  );
};

export default HomePage;
