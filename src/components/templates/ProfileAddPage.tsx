"use client";
import { useForm } from "react-hook-form";
import TextInput from "@/modules/TextInput";
import styles from "@/templates/styles/profileAddPage/route.module.css";

export interface FormValues {
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  constructionDate: Date;
  category: string;
  rules: string[];
  amenities: string[];
}

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
  const submitHandler = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section>
      <h2 className={styles.title}>ثبت آگهی</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <TextInput
          title="عنوان آگهی"
          name="title"
          profileData={profileData}
          setValue={setValue}
        />
        <TextInput
          title="توضیحات"
          name="price"
          profileData={profileData}
          setValue={setValue}
          textarea={true}
        />

        <TextInput
          title="آدرس"
          name="description"
          profileData={profileData}
          setValue={setValue}
        />
        <TextInput
          title=" شماره تماس"
          name="phone"
          profileData={profileData}
          setValue={setValue}
        />
        <TextInput
          title="قیمت (تومان)"
          name="price"
          profileData={profileData}
          setValue={setValue}
        />
        <button className="w-full text-white bg-orange-500 mt-6 rounded-md py-1 transition-all duration-200 hover:bg-opacity-70" type="submit">ذخیره</button>
      </form>
    </section>
  );
};

export default ProfileAddPage;
