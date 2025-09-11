import React from "react";
import Card from "@/modules/Card";
import styles from "@/templates/styles/buyResidential/route.module.css";
import { ProfileTypes } from "@/models/interface/ProfileTypes";

interface ResidentialProps {
  data: ProfileTypes[];
}

const BuyResidentialPage = ({ data }: ResidentialProps) => {
  console.log(data);
  return (
    <section className={styles.container}>
      <div className={styles.aside}>
        <aside>مثال</aside>
      </div>
      <div className={styles.main}>
        {data.length ? null : <h2>آگهی پیدا نشد</h2>}
        {data?.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default BuyResidentialPage;
