import React, { JSX, PropsWithChildren } from "react";
import styles from "@/modules/styles/title/route.module.css";

interface TitleProps extends PropsWithChildren {
  Tag: keyof JSX.IntrinsicElements;
}

const Title = ({ Tag, children }: TitleProps) => {
  return (
    <>
      <Tag className={Tag === "h3" ? styles.title__h3 : styles.title}>
        {children}
      </Tag>
    </>
  );
};

export default Title;
