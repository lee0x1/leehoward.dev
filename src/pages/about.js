import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.scss';
import clsx from 'clsx';
import selfieImage from '@site/static/img/me.jpg';

function About() {
  return (
    <Layout description="Portfolio, Blog, and Docs all in one place!">
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.introContainer}>
                <h1 className="hero__title">Hi I&#39;m Lee.</h1>
                <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
                  I&#39;m a software engineer and enthusiast of most things
                  tech. This is my personal website which functions as a blog
                  along with docs of things I&#39;ve learned over the years.
                  Have a look around you might find something useful!
                </p>
              </div>
            </div>
            <div className={`col`}>
              <div className={styles.selfieContainer}>
                <img
                  className={styles.selfieImage}
                  src={selfieImage}
                  height="320"
                  width="320"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main></main>
    </Layout>
  );
}

export default About;
