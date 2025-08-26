"use client";
import { useForm } from "react-hook-form";
import TextInput from "@/modules/TextInput";
import styles from "@/templates/styles/profileAddPage/route.module.css";

import { FormValues } from "@/templates/interface/Interface";
import RadioButton from "../modules/RadioButton";

const ProfileAddPage = () => {
  const { handleSubmit, watch, setValue } = useForm<FormValues>({
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
  console.log(profileData);

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

  const submitHandler = (data: FormValues) => {};

  return (
    <section>
      <h2 className={styles.title}>ثبت آگهی</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
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

        <RadioButton profileData={profileData} setProfileData={setValue} />

        <button
          className="w-full text-white bg-orange-500 mt-6 rounded-md py-1 transition-all duration-200 hover:bg-opacity-70"
          type="submit"
        >
          ذخیره
        </button>
      </form>
    </section>
  );
};

export default ProfileAddPage;
