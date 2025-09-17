"use client";
import React, { useState } from "react";
import Card from "@/modules/Card";
import styles from "@/templates/styles/buyResidential/route.module.css";
import { ProfileTypes } from "@/models/interface/ProfileTypes";
import SideBar from "@/modules/SideBar";

import { HiFilter } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

interface ResidentialProps {
  data: ProfileTypes[];
}

const BuyResidentialPage = ({ data }: ResidentialProps) => {
  const [display, setDisplay] = useState<boolean>(false);

  const filterHandler = () => {
    setDisplay(!display);
    document.body.style.overflow = display ? "auto" : "hidden";
  };

  return (
    <section className={styles.container}>
      <div className={(display && styles.show) || styles.aside}>
        <SideBar display={display} setDisplay={setDisplay} />
      </div>
      <div
        className={
          data.length <= 2 ? styles["styles.main-element"] : styles.main
        }
      >
        {data.length ? null : (
          <div className=" w-full flex justify-center">
            <h2 className={styles.notfound}> هیچ آگهی ثبت نشده </h2>
          </div>
        )}
        {data?.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>

      <div className={styles.filterIcon} onClick={filterHandler}>
        {display ? <IoCloseOutline /> : <HiFilter />}
      </div>
    </section>
  );
};

export default BuyResidentialPage;
