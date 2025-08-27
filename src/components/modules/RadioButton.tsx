import React from "react";
import { FormValues } from "@/templates/interface/Interface";
import { UseFormSetValue } from "react-hook-form";
import styles from "@/modules/styles/radioButton/route.module.css";
interface RadioButtonProps {
  profileData: FormValues;
  setProfileData: UseFormSetValue<FormValues>;
  title: string;
}

const RadioButton = ({
  profileData,
  setProfileData,
  title,
}: RadioButtonProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(name as keyof FormValues, value);
    console.log(profileData);
  };

  const radioListProps = [
    {
      id: "villa",
      name: "villa",
      type: "radio",
      label: "ویلا",
      value: "villa",
    },
    {
      id: "apartment",
      name: "apartment",
      type: "radio",
      label: "آپارتمان",
      value: "apartment",
    },
    {
      id: "store",
      name: "store",
      type: "radio",
      label: "مغازه",
      value: "store",
    },
    {
      id: "office",
      name: "office",
      type: "radio",
      label: "دفتر",
      value: "office",
    },
  ];

  return (
    <section className={styles.container}>
      <p className="mb-2">{title}</p>
      <div className={styles.main}>
        {radioListProps.map((item) => (
          <div key={item.id}>
            <label htmlFor={item.id}>{item.label}</label>
            <input
              type={item.type}
              id={item.id}
              name="category"
              value={item.value}
              checked={profileData.category === item.value}
              onChange={changeHandler}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RadioButton;
