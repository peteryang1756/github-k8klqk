import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from "../components/Hero";
import Pulls from "../components/Pulls.js";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
​雙龍職籃 ... 籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ...
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description="​雙龍職籃 ... 籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ...">
      <main>
      <>
      <Hero />
         <Pulls />
 <div className="container">
      <div className="column-wrap-reversed">
        <div className="image-block">
          <img
            alt=""
            data-w-id="cd4d931f-771b-3662-2f2f-9a8f90ae76b5"
            src="https://74-rho.vercel.app/images/62d564600ff95899fb6eda9d_75df1528-2822-4edf-9c6a-8cd50c0c2c28-p-500.png"
          />
        </div>
        <div className="content-block-left">
          <div className="content-wrap">
            <p className="title">
              slb
              <br />
            </p>
            <h2 className="heading-primary">​雙龍職棒</h2>
            <p className="paragraph">
              <strong>
                棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻...
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="column-wrap">
        <div className="image-block">
          <img
            alt=""
            src="https://74-rho.vercel.app/images/62d56332e87b47c78b67ac6c_taxi-basketball.png"
            width={398}
          />
        </div>
        <div className="content-block-right">
          <div className="content-wrap">
            <p className="title">sba</p>
            <h2 className="heading-primary">​雙龍職籃</h2>
            <p className="paragraph">
              <strong>
                籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得分。籃球是世界上最多人觀看
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-statistics">
    <div className="container">
      <div className="title-wrap">
        <p className="title">about ssport</p>
        <h3 className="heading-primary h3-centre">
          關於我們
          <br />
        </h3>
      </div>
      <div className="feature-number-wrap">
        <div className="statistic-circle-wrap">
          <div className="circle-div">
            <h4 className="counterup">2017</h4>
            <div className="title-capped">創建雙龍體育</div>
          </div>
        </div>
        <div className="arrow-wrap">
          <img alt="" className="arrow-image" src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-right.svg" />
          <img
            alt=""
            className="arrow-image-mobile"
            src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-down.svg"
          />
        </div>
        <div className="statistic-circle-wrap">
          <div className="circle-div">
            <h1 className="counterup">2019</h1>
            <div className="title-capped">創建sba,slb</div>
          </div>
        </div>
        <div className="arrow-wrap">
          <img alt="" className="arrow-image" src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-right.svg" />
          <img
            alt=""
            className="arrow-image-mobile-02"
            src="https://site123-git-main-ssangyongsports.vercel.app/images/arrow-down-02.svg"
          />
        </div>
        <div className="statistic-circle-wrap">
          <div className="circle-div">
            <h1 className="counterup">2022</h1>
            <div className="title-capped">收購js</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
      </main>
    </Layout>
  );
}
