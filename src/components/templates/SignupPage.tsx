"use client";

import React, { useEffect, useState } from "react";
import styles from "@/templates/styles/signupPage/styles.module.css";
import Link from "next/link";

const SignupPage = () => {
  type FormData = {
    email: string;
    password: string;
    rePassword: string;
  };
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    rePassword: "",
  });

  useEffect(() => {
    console.log("hi");
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // setForm([
    //     ...form,
    //     [name] = value
    // ])
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <section className={styles.container}>
      <h4>فرم ثبت نام</h4>
      <form onSubmit={submitHandler} className={styles.container__form}>
        <label htmlFor="email">ایمیل:</label>
        <input
          name="email"
          id="email"
          type="text"
          value={form.email}
          onChange={changeHandler}
        />

        <label htmlFor="email">رمز عبور:</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={changeHandler}
        />
        <label htmlFor="email">تکرار رمز عبور:</label>
        <input
          name="rePassword"
          type="password"
          value={form.rePassword}
          onChange={changeHandler}
        />

        <button className="leading-[1.8]" type="submit">ثبت نام</button>
      <span className={styles.form__footer}>
        آیا حساب کاربری دارید ؟  
        <Link  href="login">
        ورود
        </Link>
      </span>
      </form>
    </section>
  );
};

export default SignupPage;
