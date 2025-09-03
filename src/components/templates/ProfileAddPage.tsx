"use client";
import { useForm } from "react-hook-form";
import TextInput from "@/modules/TextInput";
import styles from "@/templates/styles/profileAddPage/route.module.css";

import { FormValues } from "@/templates/interface/Interface";
import RadioButton from "@/modules/RadioButton";
import TextList from "@/modules/TextList";
import Button from "@mui/material/Button";
import CustomDatePicker from "../modules/CustomDatePicker";
import { useState } from "react";
import { AddHandler } from "@/helper/profileAddPage/AddHandler";
import Loader from "@/modules/Loader";

const ProfileAddPage = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit, watch, setValue, getValues, reset } =
    useForm<FormValues>({
      defaultValues: {
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
      },
    });

  const profileData = watch();

  const inputProps = [
    {
      title: "عنوان آگهی",
      name: "title",
      profileData: profileData,
      setValue: setValue,
    },
    {
      title: "توضیحات",
      name: "description",
      profileData: profileData,
      setValue: setValue,
      textarea: true,
    },
    {
      title: "آدرس",
      name: "location",
      profileData: profileData,
      setValue: setValue,
    },
    {
      title: "شماره تماس",
      name: "phone",
      profileData: profileData,
      setValue: setValue,
    },
    {
      title: "قیمت (تومان)",
      name: "price",
      profileData: profileData,
      setValue: setValue,
    },
    {
      title: "بنگاه",
      name: "realState",
      profileData: profileData,
      setValue: setValue,
    },
  ];

  const submitHandler = async (formData: FormValues) => {
    await AddHandler(formData, { setError, reset, setLoading });
  };

  return (
    <section className="">
      <h2 className={styles.title}>ثبت آگهی</h2>

      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        {inputProps.map((item) => (
          <TextInput
            key={item.name}
            profileData={item.profileData}
            title={item.title}
            name={item.name}
            setValue={item.setValue}
            textarea={item.textarea}
            setError={setError}
            error={error}
          />
        ))}

        <RadioButton
          title="دسته بندی"
          profileData={profileData}
          setProfileData={setValue}
        />

        <TextList
          title="امکانات رفاهی"
          profileData={profileData}
          setProfileData={setValue}
          type="amenities"
          getValue={getValues}
        />

        <TextList
          title="قوانین"
          profileData={profileData}
          setProfileData={setValue}
          type="rules"
          getValue={getValues}
        />

        <CustomDatePicker
          title="تاریخ ساخت"
          profileData={profileData}
          setProfileData={setValue}
          type="constructionDate"
        />

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <Button type="submit" variant="contained" color="primary">
            ذخیره
          </Button>
        )}
      </form>
    </section>
  );
};

export default ProfileAddPage;
