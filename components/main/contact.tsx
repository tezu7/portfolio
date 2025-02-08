import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "./contact.module.css";
const inter = Inter({ subsets: ["latin"] });

export const Contact = () => {
  const form = useRef(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <>
      <Head>
        <title>お問い合わせ</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Contact us to get in touch with us" />
        <meta name="keywords" content="contact, email, message" />
        <meta name="author" content="ali" />
      </Head>
      <div id="contact" className={`${styles.main} ${inter.className}`}>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">お問い合わせ</h1>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.formGroup}>
            <label className="text-white mb-5 text-[20px]" htmlFor="user_name">
                氏名
            </label>
            <input className="text-white bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" type="text" id="user_name" name="user_name" required />
          </div>
          <div className={styles.formGroup}>
            <label className="text-white mb-5 text-[20px]" htmlFor="email">
                メールアドレス
            </label>
            <input className="text-white bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" type="email" id="email" name="user_email" required />
          </div>
          <div className={styles.formGroup}>
            <label className="text-white mb-5 text-[20px]" htmlFor="message">
                メッセージ
            </label>
            <textarea className="text-white bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" rows={8} id="message" name="message" required />
          </div>
          <button className="w-full py-3 text-[20px] button-primary text-center text-white cursor-pointer rounded-lg" type="submit">
            送信する
          </button>
        </form>
      </div>
    </>
  );
};