"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import styles from "@/components/layout/styles/header/route.module.css";
import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MenuNavigation from "@/components/modules/MenuNavigation";
import { handleClick } from "@/helper/handleClick/handleClick";

const Header = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const { data } = useSession();

  const toggleHandler = () => {
    setIsMenu(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) =>
      handleClick({ e, isMenu, setIsMenu, ref, iconRef })
    );
    return () => {
      document.removeEventListener("click", (e: MouseEvent) =>
        handleClick({ e, isMenu, setIsMenu, ref, iconRef })
      );
    };
  }, [isMenu]);

  return (
    <header className={styles.header}>
      <ul className="flex gap-4">
        <li>
          <Link href={"/"}>صفحه اصلی</Link>
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
        <>
          <Link href={"/dashboard"} className="max-sm:hidden">
            <CgProfile className={styles.header__dashboard} />
          </Link>
          <div
            ref={iconRef}
            className="cursor-pointer sm:hidden"
            onClick={toggleHandler}
          >
            <HiOutlineMenuAlt1 className="text-[1.5rem]" />
          </div>
        </>
      )}
      <MenuNavigation ref={ref} isMenu={isMenu} setIsMenu={setIsMenu} />
    </header>
  );
};

export default Header;
