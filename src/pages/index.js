import React from 'react';
import Layout from '@theme/Layout';

function Home() {
  return (
    <Layout title="Home" description="Introduction to Lee Howard's website">
      <div className="hero">
        <div className="container">
          <span className="hero__title">Hi, I&apos;m Lee. 👋🏽</span>
          <p className="hero__subtitle">
            Game Developer at{' '}
            <a href="https://twitter.com/pixelpackdgames">PixelPackd Games</a>
          </p>
          <p>
            I like to write about game development and of many things contribute
            to open-source.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
