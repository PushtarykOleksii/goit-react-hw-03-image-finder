import React from 'react';
import PropTypes from 'prop-types';
import design from './Modal.module.css';

const Modal = ({ largeURL, closeModal }) => {
  return (
    <div className={design.basicLightbox} onClick={closeModal}>
      <div className={design.modalContent}>
        <img src={largeURL} alt="imgLarge" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;

// dumb component =}
