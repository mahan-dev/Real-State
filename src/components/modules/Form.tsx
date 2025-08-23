import React from "react";
import styles from "@/templates/styles/signupPage/styles.module.css";
import FormData from "@/templates/interface/Interface";
import { ThreeDots } from "react-loader-spinner";
import { getServerSession } from "next-auth";

interface FormInputProps {
  form: {
    email: string;
    password: string;
    rePassword?: string;
  };
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  button: string;
  isLoading: boolean;
  rePassword: boolean;
  submitHandler: (e: React.FormEvent) => void;
}

const Form = ({
  form,
  setForm,
  button,
  submitHandler,
  rePassword,
  isLoading,
}: FormInputProps) => {



  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    } as FormData);
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.container__form}>
        <label htmlFor="email">ایمیل:</label>
        <input
          name="email"
          id="email"
          type="text"
          value={form.email}
          placeholder="ایمیل"
          
          onChange={changeHandler}
        />

        <label htmlFor="password">رمز عبور:</label>
        <input
          name="password"
          id="password"
          type="password"
          value={form.password}
          placeholder="رمز عبور"
          onChange={changeHandler}
        />

        {rePassword && (
          <>
            <label htmlFor="email">تکرار رمز عبور:</label>
            <input
              name="rePassword"
              type="password"
              value={form.rePassword}
              placeholder="تکرار رمز عبور"
              onChange={changeHandler}
            />
          </>
        )}

        {isLoading ? (
          <ThreeDots
            height="80"
            width="80"
            color="#f97316"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button className="leading-[1.8]" type="submit">
            {button}
          </button>
        )}
      </form>
    </>
  );
};

export default Form;
