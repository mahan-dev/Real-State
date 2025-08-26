import React from "react";
import { FormValues } from "@/templates/interface/Interface";
import { UseFormSetValue } from "react-hook-form";
import styles from "@/modules/styles/radioButton/route.module.css";
interface RadioButtonProps {
  profileData: FormValues;
  setProfileData: UseFormSetValue<FormValues>;
}

const RadioButton = ({ profileData, setProfileData }: RadioButtonProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(name as keyof FormValues, value);
    console.log(profileData);
  };

  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <div>
          <label htmlFor="office">دفتر کار</label>
          <input
            name="category"
            id="office"
            type="radio"
            value="office"
            checked={profileData.category === "office"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="home"> خونه</label>
          <input
            id="home"
            name="category"
            type="radio"
            checked={profileData.category === "home"}
            value="home"
            onChange={changeHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default RadioButton;
