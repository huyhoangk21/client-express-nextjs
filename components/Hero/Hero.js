import React from 'react';
import HeroContainer from './Hero.styled';
import PropTypes from 'prop-types';

const Hero = ({ img, text, children }) => {
  return (
    <HeroContainer img={img}>
      <h1>{text}</h1>
      {children}
    </HeroContainer>
  );
};

Hero.propTypes = {
  img: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Hero;
