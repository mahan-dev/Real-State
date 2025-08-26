import React from "react";
import styles from "@/templates/styles/dashboardPage/route.module.css"

interface DashboardProps {
  createdAt: string;
}

const DashboardPage = ({ createdAt }: DashboardProps) => {
  const date = new Date(createdAt).toLocaleDateString("fa-IR");

  return (
    <section>
      <h2>سلام 👋</h2>
      <p className="mt-[6rem]">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>

      <div className={styles.date}>
        <p className="text-black ml-2">
          تاریخ عضویت: 
        </p>
        <span className="text-orange-500"> {date}</span>
      </div>
    </section>
  );
};

export default DashboardPage;
