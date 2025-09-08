"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Profiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import Card from "@/modules/Card";

import styles from "@/modules/styles/dashboardCard/route.module.css";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

interface DashboardProps {
  data: Profiles;
}

const DashboardCard = ({ data }: DashboardProps) => {
  const router = useRouter();

  const editHandler = async (id: string) => {
    router.push(`/dashboard/my-profiles/${id}`);
  };

  const deleteHandler = async (id: string) => {
    try {
      const res = await axios.delete<string>(`/api/profile/delete/${id}`);
      const status = res.status === 200;
      if (status) router.refresh();
    } catch {
      console.log("something went wrong");
    }
  };
  return (
    <section className={styles.container}>
      <Card data={data} />

      <div className={styles.container__info}>
        <button
          className={styles.button__edit}
          onClick={() => editHandler(data._id)}
        >
          ویرایش
          <FaEdit />
        </button>
        <button
          className={styles.button__delete}
          onClick={() => deleteHandler(data._id)}
        >
          حذف
          <AiFillDelete />
        </button>
      </div>
    </section>
  );
};

export default DashboardCard;
