import React from "react";
import { Profiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import Card from "@/modules/Card";

interface DashboardProps {
  data: Profiles;
}

const DashboardCard = ({ data }: DashboardProps) => {
  console.log(data);

  return (
    <section>
      <h2>{data.title}</h2>
      <Card />
    </section>
  );
};

export default DashboardCard;
