"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Profiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import Card from "@/modules/Card";

import styles from "@/modules/styles/dashboardCard/route.module.css";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { DeleteHandler } from "@/helper/dashboardCard/deleteHandler";
import Loader from "@/modules/Loader";

interface DashboardProps {
  data: Profiles;
}

const DashboardCard = ({ data }: DashboardProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const editHandler = async (id: string) => {
    router.push(`/dashboard/my-profiles/${id}`);
  };

  const deleteHandler = async (id: string) => {
    await DeleteHandler({ id, router, setLoading });
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
          {loading ? (
            <Loader loader={true} />
          ) : (
            <>
              حذف
              <AiFillDelete />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default DashboardCard;
