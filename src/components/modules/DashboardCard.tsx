import React from "react";
import { Profiles } from "@/helper/Dashboard-MyProfiles/UserProfiles";
import Card from "@/modules/Card";


interface DashboardProps {
  data: Profiles;
}

const DashboardCard = ({ data }: DashboardProps) => {

  return (
    <section>
      <Card data={data} />
    </section>
  );
};

export default DashboardCard;
