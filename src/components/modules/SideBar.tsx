import React from "react";
import styles from "@/modules/styles/sideBar/route.module.css";
import { FaFilter } from "react-icons/fa6";
import Link from "next/link";

const SideBar = () => {

    const queries = [
        {villa: "ویلا"},
        {apartment: "آپارتمان"},
        {office: "دفتر"},
        {store: "مغازه"},
    ]

  return (
    <aside className={styles.aside}>
      <p>
        <FaFilter className="text-orange-500" />
        دسته بندی
      </p>
      <Link href={"/buy-residential"}>همه</Link>
      {
        queries.map((item, index) => (
            <Link key={index} href={{
                pathname:"/buy-residential",
                query:{category: Object.keys(item)}
            }}>
                {Object.values(item)}
            </Link>
        ))
      }
    </aside>
  );
};

export default SideBar;
