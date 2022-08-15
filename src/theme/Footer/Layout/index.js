import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container--fluid">
        <div className="footer__links">
          <a className="footer__link-item" href="/docs">
            Documentation
          </a>
          <span className="footer__link-separator">&middot;</span>
          <a className="footer__link-item" href="/blog">
            Blog
          </a>
          <span className="footer__link-separator">&middot;</span>
          <a className="footer__link-item" href="https://github.com/leehowardx">
            GitHub
          </a>
          <span className="footer__link-separator">&middot;</span>
          <a
            className="footer__link-item"
            href="https://twitter.com/leehowardx"
          >
            Twitter
          </a>
        </div>
        <div>Copyright © 2022 Lee Howard</div>
      </div>
    </footer>
  );

  // leave original code in place for beter understanding of customizations

  // return (
  //   <footer
  //     className={clsx('footer', {
  //       'footer--dark': style === 'dark',
  //     })}>
  //     <div className="container container-fluid">
  //       {links}
  //       {(logo || copyright) && (
  //         <div className="footer__bottom text--center">
  //           {logo && <div className="margin-bottom--sm">{logo}</div>}
  //           {copyright}
  //         </div>
  //       )}
  //     </div>
  //   </footer>
  // );
}

FooterLayout.propTypes = {
  style: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};
