// Libs
import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
