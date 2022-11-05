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
              src={useBaseUrl("/img/logo_jed.png")}
              alt="Gotenberg Hero Logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
