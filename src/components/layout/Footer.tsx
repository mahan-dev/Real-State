import React from "react";
import styles from "@/components/layout/styles/footer/route.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="w-[700px] max-lg:ml-4 max-lg:w-full">
        <span className="font-bold">سامانه خرید و اجاره ملک</span>

        <p className="font-light text-justify mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </p>
      </div>

      <div className="mr-auto max-lg:mr-[0] max-lg:w-full">
        <ul className={styles.footer__list}>
          <li>
            <Link href={""}>تعرفه قانونی</Link>
          </li>

          <li>
            <Link href={""}> دسترسی سریع </Link>
          </li>
          <li>
            <Link href={""}> مشاورین خبره </Link>
          </li>
          <li>
            <Link href={""}> قولنامه محضری </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
