"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import styles from "@/components/layout/styles/header/route.module.css";
import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  const { data } = useSession();


  return (
    <header className={styles.header}>
      <ul className="flex gap-4">
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
        </li>
        <li>
          <Link href={"agahi"}>آگهی ها</Link>
        </li>
      </ul>

      {!data ? (
        <Link className={styles.header__login} href={"/signin"}>
          <FaArrowRightToBracket />
          ورود
        </Link>
      ) : (
        <Link href={"/dashboard"}>
          <CgProfile className={styles.header__dashboard} />
        </Link>
      )}
    </header>
  );
};

export default Header;
