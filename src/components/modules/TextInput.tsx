import React from "react";
import { FormValues } from "@/templates/interface/Interface";
import { UseFormSetValue } from "react-hook-form";
import styles from "@/modules/styles/textInput/route.module.css";
import { p2e } from "@/utils/replaceNumber";

interface textType {
  title: string;
  name: string;
  profileData: FormValues;
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

    setValue(name as keyof FormValues, p2e(value));
  };

  return (
    <section className={styles.container}>
      <p className="mt-8 mb-1 ">{title}</p>

      {textarea ? (
        <textarea className={styles.container__textarea} />
      ) : (
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
