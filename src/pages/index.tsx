import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import styles from "./styles.module.css";

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

</>
      </main>
    </Layout>
  );
}
