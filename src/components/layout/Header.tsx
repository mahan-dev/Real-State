"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import styles from "@/components/layout/styles/header/route.module.css";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  useEffect(() => {}, []);
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

      {!data ? (
        <Link className={styles.header__login} href={"/signin"}>
          <FaArrowRightToBracket />
          ورود
        </Link>
      ) : (
        <p>dashboard</p>
      )}
    </header>
  );
};

export default Header;
