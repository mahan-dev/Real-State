"use client";

import React, { useState } from "react";
import styles from "@/templates/styles/signupPage/styles.module.css";
import SignupValidation from "@/helper/signupPage/SignupHandler";
import Form from "@/modules/Form";
import Link from "next/link";
import FormData from "@/templates/interface/Interface";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    rePassword: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password, rePassword } = form;
    const res = await SignupValidation({
      form,
      setForm,
      email,
      password,
      rePassword,
      setIsLoading,
    });
    if (res) router.push("/signin");
  };

  return (
    <section className={styles.container}>
      <h4>فرم ثبت نام</h4>
      <Form
        form={form}
        setForm={setForm}
        button="ثبت نام"
        submitHandler={submitHandler}
        rePassword={true}
        isLoading={isLoading}
      />

      <span className={styles.form__footer}>
        آیا حساب کاربری دارید ؟<Link href="signin">ورود</Link>
      </span>
    </section>
  );
};

export default SignupPage;
