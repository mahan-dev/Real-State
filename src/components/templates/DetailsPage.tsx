import React from "react";
import { ProfileDoc } from "@/templates/interface/Interface";
import styles from "@/templates/styles/detailsPage/route.module.css";
import Title from "@/modules/Title";
import { TiLocation } from "react-icons/ti";
import ItemList from "@/modules/ItemList";

const DetailsPage = ({ data }: ProfileDoc) => {
  const { title, description, location, amenities, rules } = data;
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <Title Tag="h1"> {title}</Title>
        <div className={styles.main__location}>
          <TiLocation />
          {location}
        </div>

        <Title Tag="h3">توضیحات</Title>
        <p className={styles.title__description}>{description}</p>
        <Title Tag="h3">امکانات</Title>
        <ItemList data={amenities} />
        
        <Title Tag="h3">قوانین</Title>
        <ItemList data={rules} />

      </div>
      <div className={styles.aside}></div>
    </section>
  );
};

export default DetailsPage;
