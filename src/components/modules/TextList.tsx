import React from "react";
import { FormValues } from "@/templates/interface/Interface";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
// icons
import { MdAddBox } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
// icons
import styles from "@/modules/styles/textList/route.module.css";

interface listProps {
  profileData: FormValues;
  setProfileData: UseFormSetValue<FormValues>;
  getValue: UseFormGetValues<FormValues>;
  type: keyof FormValues;
  title: string;
}

const TextList = ({
  profileData,
  setProfileData,
  type,
  getValue,
  title,
}: listProps) => {
  const addHandler = () => {
    const currentValue = getValue(type) as string[];
    setProfileData(type, [...currentValue, ""]);
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const list = [...(profileData[type] as string[])];
    list[index] = value;
    setProfileData(type, list);
  };

  const deleteHandler = (index: number) => {
    const list = [...(profileData[type] as string[])];
    list.splice(index, 1);
    setProfileData(type, list);
  };

  return (
    <section className="mt-8">
      <div className="">
        <p className="my-4">{title}</p>
        {(profileData[type] as string[]).map((item, index) => (
          <div className={styles.card} key={index}>
            <input
              className="w-full outline-none"
              type="text"
              value={item}
              onChange={(e) => changeHandler(e, index)}
            />

            <div
              className={styles.card__delete}
              onClick={() => deleteHandler(index)}
            >
              <span>حذف</span>
              <AiFillDelete />
            </div>
          </div>
        ))}
        <button className={styles.button} onClick={addHandler}>
          افزودن
          <MdAddBox className="text-[20px] " />
        </button>
      </div>
    </section>
  );
};

export default TextList;
