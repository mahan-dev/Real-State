"use client"
import React from "react";

import styles from "@/modules/styles/detailSidebar/route.module.css";

import { TbHomeCog } from "react-icons/tb";
import { TiPhone } from "react-icons/ti";
import { e2p, sp } from "@/utils/replaceNumber";
import { categories, icons } from "@/constants/const";
import { FaRegCalendar } from "react-icons/fa";
import ShareButton from "@/elements/ShareButton";

const SideBar = ({ phone, price, category, constructionDate }) => {
  const formattedDate = new Date(constructionDate).toLocaleDateString("fa-IR");

  return (
    <>
      <div className={styles.realState}>
        <TbHomeCog />
        <span>املاک</span>

        <p className={styles.realsState__info}>
          <TiPhone />
          {e2p(phone)}
        </p>
      </div>

      <ShareButton />
      <div className={styles.realState__price}>
        <p>
          {icons[category]}
          {categories[category]}
        </p>

        <span>{sp(price)} تومان</span>

        <p className={styles.price__date}>
          <FaRegCalendar />
          {formattedDate}
        </p>
      </div>
    </>
  );
};

export default SideBar;
