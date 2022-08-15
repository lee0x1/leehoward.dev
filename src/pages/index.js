import React from 'react';
import Layout from '@theme/Layout';
// import styles from './index.module.scss';
// import FeaturedProject, { projects } from '../components/FeaturedProject';

function Home() {
  return (
    <Layout description="Portfolio, Blog, and Docs all in one place!">
      <main>
        <div className="hero">
          <div className="container">
            <span className="hero__title">Hi, Im Lee.</span>
            <p className="hero__subtitle">
              Game Dev at{' '}
              <a href="https://twitter.com/pixelpackdgames">PixelPackd Games</a>
            </p>
            <p>
              Of many things I enjoying creating pixel art, learning game
              composition, and contributing to open-source
            </p>
          </div>
        </div>
        {/* <section className={styles.recentPosts}>
          <div className="container">
            <div className="row"></div>
          </div>
        </section> */}

        {/* {projects && projects.length > 0 && (
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
        )} */}
      </main>
    </Layout>
  );
}

export default Home;
