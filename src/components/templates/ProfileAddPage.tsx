"use client";
import { useForm } from "react-hook-form";
import TextInput from "@/modules/TextInput";
import styles from "@/templates/styles/profileAddPage/route.module.css";

import { FormValues, ProfileResponse } from "@/templates/interface/Interface";
import RadioButton from "@/modules/RadioButton";
import TextList from "@/modules/TextList";
import Button from "@mui/material/Button";
import CustomDatePicker from "../modules/CustomDatePicker";
import { useEffect, useState } from "react";
import { AddHandler } from "@/helper/profileAddPage/AddHandler";
import Loader from "@/modules/Loader";
import axios from "axios";

interface ProfileProps {
  data?: FormValues;
}
const ProfileAddPage = ({ data }: ProfileProps) => {
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

  const dataValidation = () => {
    if (data) {
      reset({
        title: data.title,
        description: data.description,
        location: data.location,
        phone: data.phone,
        price: data.price,
        realState: data.realState,
        constructionDate: data.constructionDate,
        category: data.category,
        amenities: data.amenities || [],
        rules: data.rules || [],
        _id: data._id,
      });
    }
  };
  useEffect(() => {
    if (!data) return;
    dataValidation();
  }, [data, reset]);

  const submitHandler = async (formData: FormValues) => {
    console.log(formData);
    if (!data) await AddHandler(formData, { setError, reset, setLoading });
    else {
      try {
        setLoading(true);
        const { data } = await axios.patch<FormValues>(
          "/api/profile",
          formData
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="">
      <h2 className={styles.title}>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h2>

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
        ) : data ? (
          <Button type="submit" variant="contained" color="primary">
            ذخیره ویرایش
          </Button>
        ) : (
          <Button type="submit" variant="contained" color="primary">
            ذخیره آگهی
          </Button>
        )}
      </form>
    </section>
  );
};

export default ProfileAddPage;
