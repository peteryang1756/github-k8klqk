import React from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
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
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStartedButton
              )}
              to="#123"
            >
              我們的運動
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/gotenberg/gotenberg"
            >
              <img
                className={styles.githubIcon}
                src={useBaseUrl("/img/github.svg")}
                alt="GitHub Logo"
              />{" "}
              <span className={styles.githubButtonText}>GitHub</span>
            </Link>
           
          </div>
          <div className="col col--6">
            <img
              className={styles.logo}
              src={useBaseUrl("https://74-rho.vercel.app/images/undraw_fitness_stats_sht6.svg")}
              alt="Gotenberg Hero Logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
