"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "@/templates/styles/signupPage/styles.module.css";
import Form from "@/modules/Form";
import FormData from "@/templates/interface/Interface";
import signinValidation from "@/helper/signinPage/SigninHandler";
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);


  const router = useRouter();
  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = form;

    // setIsLoading(true);
    const res = await signinValidation({ email, password, setIsLoading })
    if (res) router.push("/dashboard");
  };



  return (
    <section className={styles.container}>
      <h4>فرم ورود</h4>
      <Form
        form={form}
        setForm={setForm}
        submitHandler={submitHandler}
        button="ورود"
        rePassword={false}
        isLoading={isLoading}
      />
      <span className={styles.form__footer}>
        آیا حساب کاربری ندارید ؟<Link href="signup"> ثبت نام </Link>
      </span>
    </section>
  );
};

export default SigninPage;
