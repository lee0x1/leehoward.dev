import React from 'react';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const projects = [
  {
    title: 'Project X',
    imageUrl: 'https://picsum.photos/id/1022/320/240',
    description: <>Project X is a placeholder image and description.</>,
  },
  {
    title: 'Project Y',
    imageUrl: 'https://picsum.photos/id/1002/320/240',
    description: <>Project Y is a placeholder image and description.</>,
  },
  {
    title: 'Project Z',
    imageUrl: 'https://picsum.photos/id/120/320/240',
    description: <>Project Z is a placeholder image and description.</>,
  },
];

function FeaturedProject({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <>
      <div className="col col--4">
        <div className="card-demo">
          <div className="card">
            <div className="card__image">
              {imgUrl && (
                <div className="text--center">
                  <img src={imgUrl} alt={title} />
                </div>
              )}
            </div>
            <div className="card__body">
              <h4>{title}</h4>
              <small>{description}</small>
            </div>
            <div className="card__footer">
              <button className="button button--primary button--block">
                Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeaturedProject;

FeaturedProject.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
