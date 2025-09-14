"use client";

import React, { useEffect, useState } from "react";

import { PiShareNetworkFill } from "react-icons/pi";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styles from "@/elements/styles/shareButton/route.module.css";

const ShareButton = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <CopyToClipboard text={url}>
        <div className={styles.container}>
          <PiShareNetworkFill />
          اشتراک گذاری
        </div>
      </CopyToClipboard>
    </>
  );
};

export default ShareButton;
