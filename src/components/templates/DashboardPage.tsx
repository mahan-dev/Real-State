"use client";
import React, { useCallback, useEffect } from "react";
import styles from "@/templates/styles/dashboardPage/route.module.css";
import toast from "react-hot-toast";

interface DashboardProps {
  createdAt: string;
  profileLength: number;
}

const DashboardPage = ({ createdAt, profileLength }: DashboardProps) => {
  const date = new Date(createdAt).toLocaleDateString("fa-IR");
  const dateHandler = useCallback(() => {
    if (date !== "Invalid Date") return;
    toast.error("مشکلی پیش آمده!");
  }, [date]);

  useEffect(() => {
    dateHandler();
  }, [dateHandler]);

  return (
    <section>
      <h2>سلام 👋</h2>
      <p className="mt-[6rem]">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>

      <div className="flex mt-5">
        <p className="flex text-orange-500 me-2">تعداد آگهی های منتشر شده</p>
        <span>{profileLength}</span>
      </div>

      <div className={styles.date}>
        <p className="text-black ml-2">تاریخ عضویت:</p>
        <span className="text-orange-500"> {date}</span>
      </div>
    </section>
  );
};

export default DashboardPage;
