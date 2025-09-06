"use client";
import React from "react";
import { Profiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import Card from "@/modules/Card";
import Button from "@mui/material/Button";

import styles from "@/modules/styles/dashboardCard/route.module.css";
import axios from "axios";

interface DashboardProps {
  data: Profiles;
}
const buttonStyles = { padding: "0 0.6rem", borderColor: "orange" };

const editHandler = async () => {
  try {
    await axios.post("/api/profile/edit");
  } catch (error) {
    console.log("sd", error);
  }
};
const deleteHandler = async () => {
  try {
    await axios.post("/api/profile/delete");
    console.log("is working");
  } catch {
    console.log("something went wrong");
  }
};

const DashboardCard = ({ data }: DashboardProps) => {
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
          onClick={deleteHandler}
        >
          حذف
        </Button>
      </div>
    </section>
  );
};

export default DashboardCard;
