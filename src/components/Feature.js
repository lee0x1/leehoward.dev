import React from 'react';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

import styles from '../pages/index.module.scss';

export const features = [
  {
    title: 'Systems Programming',
    imageUrl: 'img/systems.svg',
    description: (
      <>
        Unix/Linux environments, with a goal to achieve efficient use of
        available resources.
      </>
    ),
  },
  {
    title: 'Game Development',
    imageUrl: 'img/games.svg',
    description: (
      <>
        2D games using libraries. But also explore open source game engines such
        such as Godette(Godot), and Unreal.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default Feature;

Feature.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
