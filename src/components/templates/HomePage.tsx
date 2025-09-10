import React from "react";
import styles from "@/templates/styles/homePage/route.module.css";
import Services from "../modules/Services";
import CategoryCard from "@/modules/CategoryCard";

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
    { name: "villa", title: "آپارتمان" },
    { name: "villa", title: "مغازه" },
    { name: "villa", title: "دفترکار" },
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

        <CategoryCard data={categoryCard} />

        {/* <CategoryCard  name="villa" title="ویلا" /> */}
      </div>
    </section>
  );
};

export default HomePage;
