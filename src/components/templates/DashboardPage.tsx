"use client";
import React, { useCallback, useEffect } from "react";
import styles from "@/templates/styles/dashboardPage/route.module.css";
import toast from "react-hot-toast";

interface DashboardProps {
  createdAt: string;
}

const DashboardPage = ({ createdAt }: DashboardProps) => {
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

      <div className={styles.date}>
        <p className="text-black ml-2">تاریخ عضویت:</p>
        <span className="text-orange-500"> {date}</span>
      </div>
    </section>
  );
};

export default DashboardPage;
