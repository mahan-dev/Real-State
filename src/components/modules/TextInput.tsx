import React, { SetStateAction } from "react";
import { FormValues } from "@/templates/interface/Interface";
import { UseFormSetValue } from "react-hook-form";
import styles from "@/modules/styles/textInput/route.module.css";
import { p2e } from "@/utils/replaceNumber";

interface textType {
  title: string;
  name: string;
  profileData: FormValues;
  textarea?: boolean;
  error: boolean;
  setError: React.Dispatch<SetStateAction<boolean>>;
  setValue: UseFormSetValue<FormValues>;
}

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const TextInput = ({
  title,
  name,
  profileData,
  setValue,
  error,
  setError,
  textarea = false,
}: textType) => {
  const changeHandler = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setError(false);
    setValue(name as keyof FormValues, p2e(value));
  };

  return (
    <section className={styles.container}>
      <p className="mt-8 mb-1 ">{title}</p>

      {textarea ? (
        <textarea
          name={name}
          className={`${styles.container__textarea} ${error && styles.error}`}
          onChange={changeHandler}
          value={profileData[name]}
        />
      ) : (
        <input
          type="text"
          className={`${styles.container__input} ${error && styles.error}`}
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </section>
  );
};

export default TextInput;
