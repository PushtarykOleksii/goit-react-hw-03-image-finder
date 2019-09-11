import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import design from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ imagesArr, onClickBtn, openModal }) => {
  return (
    <div className={design.container}>
      <ul className={design.gallery}>
        {imagesArr.map(
          ({
            webformatURL,
            largeImageURL,
            likes,
            views,
            comments,
            downloads,
          }) => (
            <PhotoCard
              key={shortid.generate()}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              likes={likes}
              views={views}
              comments={comments}
              downloads={downloads}
              openModal={openModal}
            />
          ),
        )}
      </ul>
      <button type="button" onClick={onClickBtn} className={design.button}>
        Load more
      </button>
    </div>
  );
};

Gallery.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onClickBtn: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Gallery;
