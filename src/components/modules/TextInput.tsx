import React from "react";
import { FormValues } from "@/templates/ProfileAddPage";
import { UseFormSetValue } from "react-hook-form";
import styles from "@/modules/styles/textInput/route.module.css";

interface textType {
  title: string;
  name: keyof FormValues;
  profileData: object;
  textarea?: boolean;
  setValue: UseFormSetValue<FormValues>;
}

const TextInput = ({
  title,
  name,
  profileData,
  setValue,
  textarea = false,
}: textType) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValue(name as keyof FormValues, value);
  };

  return (
    <section className={styles.container}>
      <p className="mt-8 mb-1 ">{title}</p>

      {textarea ? (
        <textarea className={styles.container__textarea} />
      ): (
        <input
          type="text"
          className={styles.container__input}
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </section>
  );
};

export default TextInput;
 