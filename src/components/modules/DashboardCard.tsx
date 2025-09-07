"use client";
import React from "react";
import { Profiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import Card from "@/modules/Card";
import Button from "@mui/material/Button";

import styles from "@/modules/styles/dashboardCard/route.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface DashboardProps {
  data: Profiles;
}
const buttonStyles = { padding: "0 0.6rem", borderColor: "orange" };

const DashboardCard = ({ data }: DashboardProps) => {
  const editHandler = async () => {
    try {
      await axios.patch("/api/profile");
    } catch (error) {
      console.log("sd", error);
    }
  };

  const router = useRouter();
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

      <div className="flex justify-between gap-2 mt-2">
        <Button
          sx={buttonStyles}
          variant="outlined"
          color="primary"
          onClick={editHandler}
        >
          ویرایش
        </Button>
        <Button
          sx={buttonStyles}
          variant="outlined"
          color="primary"
          onClick={() => deleteHandler(data._id)}
        >
          حذف
        </Button>
      </div>
    </section>
  );
};

export default DashboardCard;
