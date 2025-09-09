"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Profiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import Card from "@/modules/Card";

import styles from "@/modules/styles/dashboardCard/route.module.css";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { DeleteHandler } from "@/helper/dashboardCard/deleteHandler";

interface DashboardProps {
  data: Profiles;
}

const DashboardCard = ({ data }: DashboardProps) => {
  const router = useRouter();

  const editHandler = async (id: string) => {
    router.push(`/dashboard/my-profiles/${id}`);
  };

  const deleteHandler = async (id: string) => {
    await DeleteHandler({id, router})
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
