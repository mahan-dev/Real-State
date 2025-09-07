"use client";
import { signOut } from "next-auth/react";
import React, { JSX } from "react";
import { FiLogOut } from "react-icons/fi";
import styles from "@/elements/styles/logoutButton/route.module.css";

const LogOutButton = (): JSX.Element => {
  return (
    <button className={styles.button} onClick={() => signOut()}>
      <FiLogOut className="text-[1.3rem]" />
      خروج
    </button>
  );
};

export default LogOutButton;
