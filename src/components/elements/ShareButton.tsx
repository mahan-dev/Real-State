"use client";

import React, { useEffect, useState } from "react";

import { PiShareNetworkFill } from "react-icons/pi";
import styles from "@/elements/styles/shareButton/route.module.css";
import toast from "react-hot-toast";

const ShareButton = () => {
  const [url, setUrl] = useState<string>("");

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("کپی شد");
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <div className={styles.container} onClick={copyHandler}>
        <PiShareNetworkFill />
        اشتراک گذاری
      </div>
    </>
  );
};

export default ShareButton;
