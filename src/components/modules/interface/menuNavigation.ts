import {Dispatch, RefObject, SetStateAction } from "react";


export interface MenuProps {
  ref: RefObject<HTMLDivElement>;
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>
}

export interface ResponseData {
  data: string;
  message: string;
  status: string;
}
