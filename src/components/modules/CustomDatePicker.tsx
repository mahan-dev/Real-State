import React, { ChangeEvent } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FormValues } from "@/templates/interface/Interface";
import { UseFormSetValue } from "react-hook-form";

interface DatePickerProps {
  profileData: FormValues;
  setProfileData: UseFormSetValue<FormValues>;
  type: keyof FormValues;
}

const CustomDatePicker = ({
  profileData,
  setProfileData,
  type,
}: DatePickerProps) => {
  const changeHandler = (e: DateObject | null) => {
    const date = e.toDate();
    setProfileData(type, date);
  };
  return (
    <section>
      <p>تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        onChange={changeHandler}
      />
    </section>
  );
};

export default CustomDatePicker;
