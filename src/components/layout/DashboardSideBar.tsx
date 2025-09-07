import React from "react";
import styles from "@/components/layout/styles/dashboard-sidebar/route.module.css";

import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogOutButton from "@/elements/LogOutButton";

import { AiFillProfile } from "react-icons/ai";
import { RiAccountBox2Fill } from "react-icons/ri";
import { RiAddBoxFill } from "react-icons/ri";

const DashboardSideBar = async ({ children }) => {
  const session = await getServerSession(authOptions);
  const email = session?.user.email;

  return (
    <section className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__header}>
          <CgProfile />
          <p className="break-all">{email ? email : "nothing found"}</p>
        </div>

        <div className={styles.sidebar__main}>
          <ul>
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
        <LogOutButton />
      </div>
      <div className={styles.main}> {children}</div>
    </section>
  );
};

export default DashboardSideBar;
