"use client";
import React from "react";
import Link from "next/link";
import { RiAccountBox2Fill, RiAddBoxFill } from "react-icons/ri";
import { AiFillProfile } from "react-icons/ai";
import styles from "@/components/layout/styles/dashboard-sidebar/route.module.css";

interface SideBarProps {
  setIsMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ setIsMenu }: SideBarProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const li = target.closest("li");

    if (li) {
      setIsMenu(false);
    }
  };
  return (
    <>
    <div className={styles.sidebar__main}>

      <ul onClick={setIsMenu && clickHandler}>
        <li>
          <Link href={"/dashboard"}>
            <RiAccountBox2Fill className={styles.icon} />
            حساب کاربری
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/my-profiles"}>
            <AiFillProfile className={styles.icon} />
            آگهی های من
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/add"}>
            <RiAddBoxFill className={styles.icon} />
            ثبت آگهی
          </Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default SideBar;
