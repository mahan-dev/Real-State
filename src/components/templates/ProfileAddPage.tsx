"use client";
import { useForm } from "react-hook-form";
import TextInput from "@/modules/TextInput";
import styles from "@/templates/styles/profileAddPage/route.module.css";

import { FormValues } from "@/templates/interface/Interface";
import RadioButton from "@/modules/RadioButton";
import TextList from "@/modules/TextList";
import Button from "@mui/material/Button";
import CustomDatePicker from "../modules/CustomDatePicker";
import { useCallback, useEffect, useState } from "react";
import { AddHandler } from "@/helper/profileAddPage/AddHandler";
import Loader from "@/modules/Loader";

import { EditHandler } from "@/helper/profileAddPage/EditHandler";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { TextInputProps } from "@/constants/textInput";

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

  const dataValidation = useCallback(() => {
    if (data) {
      reset({
        title: data.title,
        description: data.description,
        location: data.location,
        phone: data.phone,
        price: data.price,
        realState: data.realState,
        constructionDate: data.constructionDate
          ? new Date(data.constructionDate)
          : new Date(),
        category: data.category,
        amenities: data.amenities || [],
        rules: data.rules || [],
        _id: data._id,
      });
    }
  }, [data, reset]);

  useEffect(() => {
    if (!data) return;
    dataValidation();
  }, [data, dataValidation]);

  const router: AppRouterInstance = useRouter();

  const submitHandler = async (formData: FormValues) => {
    if (!data) await AddHandler(formData, { setError, reset, setLoading });
    else if (data) EditHandler({ formData, setLoading, router });
  };

  return (
    <section className="mb-32">
      <h2 className={styles.title}>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h2>

      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        {TextInputProps.map(({ title, name, textarea }) => (
          <TextInput
            key={name}
            profileData={profileData}
            title={title}
            name={name}
            setValue={setValue}
            textarea={textarea}
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
