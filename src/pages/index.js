import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import RecentPosts from '../components/RecentPosts';
import FeaturedProject, { projects } from '../components/FeaturedProject';

function Home() {
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
                <img src="img/me.jpg" height="320" width="320"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className={styles.recentPosts}>
          <div className="container">
            <div className="row">
              <RecentPosts posts={10} />
            </div>
          </div>
        </section>

        {projects && projects.length > 0 && (
          <>
            <section className={styles.featuredProjects}>
              <div className="container">
                <h1>Projects</h1>
                <div className="row">
                  {projects.map((props, idx) => (
                    <FeaturedProject key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </Layout>
  );
}

export default Home;
