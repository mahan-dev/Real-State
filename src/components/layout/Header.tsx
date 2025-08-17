import Link from "next/link";
import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import styles from "@/components/layout/styles/header/route.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className="flex gap-4">
        <li>
          <Link href={"homePage"}>صفحه اصلی</Link>
        </li>
        <li>
          <Link href={"agahi"}>آگهی ها</Link>
        </li>
      </ul>
      <span className={styles.header__login}>
        <FaArrowRightToBracket />
        <Link href={"/login"}>ورود</Link>
      </span>

    </header>
  );
};

export default Header;
