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
              <strong className="bold-text-10">體育組織</strong>
              <span>
              </span>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStartedButton
              )}
              to="#123"
            >
              我們的運動           
              <img
                className={styles.githubIcon}
                src={useBaseUrl("https://74-rho.vercel.app/images/undraw_fitness_stats_sht6.svg")}
                alt="GitHub Logo"
              />{" "}
              <span className={styles.githubButtonText}>GitHub</span>
            </Link>           
          <div className="col col--6">
            <img
              className={styles.logo}
              src={useBaseUrl("https://74-rho.vercel.app/images/undraw_fitness_stats_sht6.svg")}
              alt="ssport"
            />
          </div>
      </div>
    </header>
  );
}
