import React from "react";
import { CgClose } from "react-icons/cg";
import SideBar from "@/modules/SideBar";
import styles from "@/elements/styles/menuNavigation/route.module.css";
import LogOutButton from "@/elements/LogOutButton";

interface MenuProps {
  ref: React.RefObject<HTMLDivElement>;
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuNavigation = ({ ref, isMenu, setIsMenu }: MenuProps) => {
  const closeHandler = () => {
    setIsMenu(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div
      ref={ref}
      className={` ${styles.menu} ${
        isMenu ? "translate-x-0" : "-translate-x-full"
      }  `}
    >
      <CgClose className={styles.closeIcon} onClick={closeHandler} />

      <SideBar setIsMenu={setIsMenu} />
      <LogOutButton />
    </div>
  );
};

export default MenuNavigation;
