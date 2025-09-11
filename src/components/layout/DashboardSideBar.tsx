import React from "react";
import styles from "@/components/layout/styles/dashboard-sidebar/route.module.css";

import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogOutButton from "@/elements/LogOutButton";
import SideBar from "@/components/modules/MenuBar";

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
          <SideBar />
        </div>
        <LogOutButton />
      </div>
      <div className={styles.main}> {children}</div>
    </section>
  );
};

export default DashboardSideBar;
