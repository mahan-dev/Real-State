import React from "react";
import Card from "@/modules/Card";
import styles from "@/templates/styles/buyResidential/route.module.css";
import { ProfileTypes } from "@/models/interface/ProfileTypes";
import SideBar from "../modules/SideBar";

interface ResidentialProps {
  data: ProfileTypes[];
}

const BuyResidentialPage = ({ data }: ResidentialProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.aside}>
        <SideBar />
      </div>
      <div className={styles.main}>
        {data.length ? null : (
          <div className=" w-full flex justify-center">
            <h2 className={styles.notfound}> هیچ آگهی ثبت نشده </h2>
          </div>
        )}
        {data?.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default BuyResidentialPage;
