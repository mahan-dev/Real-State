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
  const menuStyles =
    "fixed top-0 left-0 w-[200px]  transition-all duration-150 ease-linear  h-full bg-white z-50 ";

  return (
    <div
      ref={ref}
      className={` ${menuStyles} ${
        isMenu ? "translate-x-0" : "-translate-x-full"
      }  `}
    >
      <CgClose className={styles.closeIcon} onClick={() => setIsMenu(false)} />

      <SideBar setIsMenu={setIsMenu} />
      <LogOutButton />
    </div>
  );
};

export default MenuNavigation;
