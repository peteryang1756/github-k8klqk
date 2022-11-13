import React from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  return (
    <header className={styles.hero}>
<div className="header">
  <div className="container">
    <div className="hero-content">
      <div className="hero-block">
        <div className="content-block-hero">
          <h1 className="heading-2">
            <strong className="bold-text-9">我們的</strong>
            <span>
              <strong className="bold-text">使命</strong>
            </span>
            <strong className="bold-text-9">是將</strong>
            <span>

          <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="formbold-mb-5">
        <>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>

        <label for="name" class="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-mb-5">
        <label for="email" class="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-mb-5">
        <label for="subject" class="formbold-form-label"> Subject </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-mb-5">
        <label for="message" class="formbold-form-label"> Message </label>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Type your message"
          class="formbold-form-input"
        ></textarea>
      </div>

      <div>
        <button class="formbold-btn">Submit</button>
      </div>
    </div>
  </div>
</div>
    </header>
  );
}
