import React from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";
import styles from "@/modules/styles/sideBar/route.module.css";

import { categories } from "@/constants/const";

interface SideBarProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ display, setDisplay }: SideBarProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth <= 768) {
      const target = e.target as HTMLElement;

      if (target.closest("a")) {
        setDisplay(false);
        document.body.style.overflow = "auto";
      }
    }
  };
  return (
    <aside className={(display && styles.show) || styles.aside}>
      <p>
        <FaFilter className="text-orange-500" />
        دسته بندی
      </p>
      <div className={"flex flex-col"} onClick={clickHandler}>
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
      </div>
    </aside>
  );
};

export default SideBar;
