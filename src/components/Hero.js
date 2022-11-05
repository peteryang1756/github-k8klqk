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
            <h1>
             我們的使命是將雙龍體育組成最棒 <br />
              <span className="highlight">體育組織</span>
            </h1>
                        <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStartedButton
              )}
              to="#123"
            >
              我們的運動
            </Link>            
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
