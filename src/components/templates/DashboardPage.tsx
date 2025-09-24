"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "@/templates/styles/dashboardPage/route.module.css";
import toast from "react-hot-toast";
import { residentialHandler } from "@/helper/dashboardPage/residentialHandler";
import Loader from "@/modules/Loader";

interface DashboardProps {
  createdAt: string;
}

const DashboardPage = ({ createdAt }: DashboardProps) => {
  const [count, setCounter] = useState<number>(0);

  const date = new Date(createdAt).toLocaleDateString("fa-IR");

  const dateHandler = useCallback(() => {
    if (date !== "Invalid Date") return;
    toast.error("مشکلی پیش آمده!");
  }, [date]);

  const resLength = useCallback(async () => {
    const res = await residentialHandler();
    setCounter(res);
  }, []);

  useEffect(() => {
    dateHandler();
    resLength();
  }, [dateHandler, resLength]);

  return (
    <section>
      <h2>سلام 👋</h2>
      <p className="mt-[6rem]">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>

      <div className="flex mt-5">
        <p className="flex text-orange-500 me-2">تعداد آگهی های منتشر شده</p>
        <span>{count >= 0 ? count : <Loader loader={true} />}</span>
      </div>

      <div className={styles.date}>
        <p className="text-black ml-2">تاریخ عضویت:</p>
        <span className="text-orange-500"> {date}</span>
      </div>
    </section>
  );
};

export default DashboardPage;
