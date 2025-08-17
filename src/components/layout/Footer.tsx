import React from "react";
import styles from "@/components/layout/styles/footer/route.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="w-[700px]">
        <span className="font-bold">سامانه خرید و اجاره ملک</span>

        <p className="font-light text-justify mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </p>
      </div>

      <ul className="font-light list-disc">
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
    </footer>
  );
};

export default Footer;
