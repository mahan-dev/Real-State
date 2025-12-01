"use client";
import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import SideBar from "@/components/modules/MenuBar";
import styles from "@/modules/styles/menuNavigation/route.module.css";
import LogOutButton from "@/elements/LogOutButton";
import { MenuProps } from "@/modules/interface/menuNavigation";
import { useSession } from "next-auth/react";
import { roleFetcher } from "@/helper/menuNavigation/navigationHandler";

const MenuNavigation = ({ ref, isMenu, setIsMenu }: MenuProps) => {
  const [role, setRole] = useState<string>("");

  const { data : session } = useSession();

  const closeHandler = () => {
    setIsMenu(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    roleFetcher({ setRole, session });
  }, [session]);

  return (
    <div
      ref={ref}
      className={` ${styles.menu} ${
        isMenu ? "translate-x-0" : "-translate-x-full"
      }  `}
    >
      <CgClose className={styles.closeIcon} onClick={closeHandler} />

      <SideBar setIsMenu={setIsMenu} role={role} />
      <LogOutButton />
    </div>
  );
};

export default MenuNavigation;
