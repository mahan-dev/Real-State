import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FormValues } from "@/templates/interface/Interface";
import { UseFormSetValue } from "react-hook-form";

import styles from "@/modules/styles/customDatePicker/route.module.css";

interface DatePickerProps {
  profileData: FormValues;
  setProfileData: UseFormSetValue<FormValues>;
  type: keyof FormValues;
  title: string;
  className?: string;
}

const CustomDatePicker = ({
  profileData,
  setProfileData,
  type,
  title,
}: DatePickerProps) => {
  const changeHandler = (e: DateObject | null) => {
    const date = e.toDate();
    setProfileData(type, date);
  };
  return (
    <section className={styles.container}>
      <p>{title}</p>
      <DatePicker
        className={`${styles.calender} calender` }
        inputClass={styles.container__datePicker}
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        onChange={changeHandler}
        editable={false}
      />
    </section>
  );
};

export default CustomDatePicker;
