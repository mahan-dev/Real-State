import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import SideBar from "@/components/modules/MenuBar";
import styles from "@/modules/styles/menuNavigation/route.module.css";
import LogOutButton from "@/elements/LogOutButton";
import axios from "axios";
import { MenuProps, ResponseData } from "./interface/route";



const MenuNavigation = ({ ref, isMenu, setIsMenu }: MenuProps) => {
  const [role, setRole] = useState<string>("");

  const closeHandler = () => {
    setIsMenu(false);
    document.body.style.overflow = "auto";
  };

  const roleFetcher = async () => {
    const { data } = await axios<ResponseData>("/api/admin/");
    setRole(data.data);
  };

  useEffect(() => {
    roleFetcher();
  }, []);

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
