import React, { SetStateAction } from "react";
import axios from "axios";

import { ResponseData } from "@/components/modules/interface/route";
import { Session } from "next-auth";

interface roleInterface {
  setRole: React.Dispatch<SetStateAction<string>>;
  session: Session | null;
}

export const roleFetcher = async ({ setRole, session }: roleInterface) => {
  if (!session) return;
  try {
    const { data } = await axios<ResponseData>("/api/admin");
    setRole(data.data);
  } catch (error) {
    console.log(error?.status);
  }
};
