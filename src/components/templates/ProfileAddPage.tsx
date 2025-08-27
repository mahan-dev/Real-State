"use client";
import { useForm } from "react-hook-form";
import TextInput from "@/modules/TextInput";
import styles from "@/templates/styles/profileAddPage/route.module.css";

import { FormValues } from "@/templates/interface/Interface";
import RadioButton from "@/modules/RadioButton";
import TextList from "@/modules/TextList";

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
  console.log(profileData)

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

        <button type="submit">ذخیره</button>
      </form>
    </section>
  );
};

export default ProfileAddPage;
