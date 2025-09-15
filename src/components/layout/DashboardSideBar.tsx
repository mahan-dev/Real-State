import React from "react";
import styles from "@/components/layout/styles/dashboard-sidebar/route.module.css";

import { CgProfile } from "react-icons/cg";
import LogOutButton from "@/elements/LogOutButton";
import SideBar from "@/components/modules/MenuBar";

interface DashboardSideBarProps {
  children: React.ReactNode;
  role: string;
  email: string;
}

const DashboardSideBar = async ({
  children,
  role,
  email,
}: DashboardSideBarProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__header}>
          <CgProfile className="shrink-0" />
          <span className="mt-1">{role === "ADMIN" && "ادمین"}</span>
          <p>{email ? email : "nothing found"}</p>
        </div>

        <div className={styles.sidebar__main}>
          <SideBar role={role} />
        </div>
        <LogOutButton />
      </div>
      <div className={styles.main}> {children}</div>
    </section>
  );
};

export default DashboardSideBar;
