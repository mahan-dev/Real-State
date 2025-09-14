import React from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";
import styles from "@/modules/styles/sideBar/route.module.css";

import { categories } from "@/constants/const";

const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <p>
        <FaFilter className="text-orange-500" />
        دسته بندی
      </p>
      <Link href={"/buy-residential"}>همه</Link>
      {Object.keys(categories).map((item, index) => (
        <Link
          key={index}
          href={{
            pathname: "/buy-residential",
            query: { category: item },
          }}
        >
          {categories[item]}
        </Link>
      ))}
    </aside>
  );
};

export default SideBar;
