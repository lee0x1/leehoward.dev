import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import FeaturedProject, { projects } from '../components/FeaturedProject';

function Home() {
  return (
    <Layout description="Portfolio, Blog, and Docs all in one place!">
      <main>
        <section className={styles.recentPosts}>
          <div className="container">
            <div className="row"></div>
          </div>
        </section>

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
