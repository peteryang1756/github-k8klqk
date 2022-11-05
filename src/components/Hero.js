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
              <strong className="bold-text-3">雙</strong>
            </span>
            <strong className="bold-text-3">龍</strong>
            <span>
              <strong className="bold-text-3">體</strong>
              <strong className="bold-text-3">育</strong>
            </span>
            <strong className="bold-text-10">組成</strong>
            <span>
              <strong className="bold-text-6">最棒</strong>
            </span>
            <strong>的</strong>
            <span className="text-span-6">
              <strong
                className="typer"
                data-delay={100}
                data-delete-delay={1000}
                data-words="體育組織,職籃組織,職棒組織"
                id="main"
              >
                體育
              </strong>
            </span>
            <span className="cursor">
              <strong className="cursor" data-owner="main"></strong>
            </span>
          </h1>
          <div className="button-wrap-hero">
            <a
              className="_6 w-inline-block"
              data-w-id="98caf78c-61ad-a196-6c1a-1e2a9ed8ddb0"
              href="#"
            >
              <div className="button-face">
                <div className="button-text">我們的運動</div>
              </div>
              <div className="button-side"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image-wrap">
        <img
          alt=""
          className="hero-image"
          src="https://74-rho.vercel.app/images/undraw_fitness_stats_sht6.svg"
        />
      </div>
    </div>
  </div>
</div>
    </header>
  );
}
