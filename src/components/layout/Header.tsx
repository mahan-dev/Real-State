"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import styles from "@/components/layout/styles/header/route.module.css";
import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MenuNavigation from "@/elements/MenuNavigation";

const Header = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const { data } = useSession();

  const handleClick = () => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!isMenu) return;
      if (ref.current.contains(target) || iconRef.current.contains(target))
        return;
      setIsMenu(false);
      document.body.style.overflow = "auto";
    };

    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  };

  const toggleHandler = () => {
    setIsMenu(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    handleClick();
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
