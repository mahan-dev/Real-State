"use client";
import React from "react";
import Link from "next/link";
import { RiAccountBox2Fill, RiAddBoxFill } from "react-icons/ri";
import { AiFillProfile } from "react-icons/ai";
import { MdOutlinePendingActions } from "react-icons/md";
import styles from "@/components/layout/styles/dashboard-sidebar/route.module.css";

interface SideBarProps {
  setIsMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  role?: string;
}

const SideBar = ({ setIsMenu, role }: SideBarProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const li = target.closest("li");

    if (li) {
      setIsMenu(false);
      document.body.style.overflow = "auto";
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
          {role === "ADMIN" && (
            <li>
              <Link href={"/admin"}>
                <MdOutlinePendingActions className={styles.icon} />
                در انتظار تایید
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
