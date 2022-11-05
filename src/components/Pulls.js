import React from "react";
import styles from "./2.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Pulls() {
  return (
    <section className={styles.section}>
      <div className="section-content">
  <div className="container space-below" id={123}>
    <div className="title-wrap-left">
      <p className="title">OUR&nbsp;sport</p>
      <h3 className="heading-primary">
        雙龍體育
        <span className="text-span">的運動</span>
      </h3>
    </div>
    <div className="service-card-wrap">
      <div className="column">
        <div className="service-card">
          <img
            alt=""
            className="service-icon"
            src="https://74-rho.vercel.app/images/baseball-16.png"
            width={75}
          />
          <div className="card-content-wrap">
            <h3 className="heading-3">雙龍職棒</h3>
            <p className="paragraph-2">
              <strong>
                棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻...
              </strong>
            </p>
          </div>
          <a
            className="_6 w-inline-block"
            data-w-id="ea4bddaa-50e0-b7b0-8410-0c4e9a6312d0"
            href="#"
            id={58}
          >
            <div className="button-side"></div>
          </a>
          <a
            className="button-2 button--white-whitebg button--space button--nomobile w-button"
            href="https://www.slbtw.cf/"
          >
            更多資訊
          </a>
        </div>
      </div>
      <div className="column">
        <div className="service-card">
          <img
            alt=""
            className="service-icon"
            src="https://74-rho.vercel.app/images/889455.png"
            width={75}
          />
          <div className="card-content-wrap">
            <h3 className="heading-3">​雙龍職籃</h3>
            <p className="paragraph-2">
              <strong>
                籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得...
              </strong>
            </p>
          </div>
          <a
            className="button-2 button--white-whitebg button--space button--nomobile w-button"
            href="https://www.sbatw.ml/"
          >
            更多資訊
          </a>
        </div>
      </div>
      <div className="column">
        <div className="service-card">
          <img
            alt=""
            className="service-icon"
            src="https://74-rho.vercel.app/images/53283.png"
            width={75}
          />
          <div className="card-content-wrap">
            <h3 className="heading-3">雙龍足球</h3>
            <p className="paragraph-2">
              <strong>
                足球（football）主要專指英式足球，官方名為協會足球（association
                football，簡稱soccer），是一種世界流行的團體球類運動，也是所有體育運動中最受歡迎、接受度最高、普及面最廣的一種，被譽為「世界遊戲」
              </strong>
            </p>
          </div>
          <a
            className="button-2 button--white-whitebg button--space button--nomobile w-button"
            href="#"
          >
            更多資訊
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
