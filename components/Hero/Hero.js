import React from 'react';
import HeroContainer from './Hero.styled';
import PropTypes from 'prop-types';

const Hero = ({ img, title, children }) => {
  return (
    <HeroContainer img={img}>
      <h1>{title}</h1>
      {children}
    </HeroContainer>
  );
};

Hero.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Hero;
