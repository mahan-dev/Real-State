"use client";
import { useForm } from "react-hook-form";
import TextInput from "@/modules/TextInput";
import styles from "@/templates/styles/profileAddPage/route.module.css";

import { FormValues, ProfileResponse } from "@/templates/interface/Interface";
import RadioButton from "@/modules/RadioButton";
import TextList from "@/modules/TextList";
import Button from "@mui/material/Button";
import CustomDatePicker from "../modules/CustomDatePicker";
import axios from "axios";
import toast from "react-hot-toast";

const ProfileAddPage = () => {
  const { handleSubmit, watch, setValue, getValues } = useForm<FormValues>({
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
  ];

  const toastDuration: { duration: number } = {
    duration: 1500,
  };
  const submitHandler = async (formData: FormValues) => {
    
    try {

      const res = await axios.post<ProfileResponse>("/api/profile", formData);
    }
     catch(error){
      const errorMessage = error.response.data.error;
      toast.error(errorMessage, toastDuration)
      console.log("error", errorMessage, error)
     }
     
   
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
            textarea={false}
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

        <Button type="submit" variant="contained" color="primary">
          ذخیره
        </Button>
      </form>
    </section>
  );
};

export default ProfileAddPage;
