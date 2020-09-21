import styled from 'styled-components';
import { Button } from '../shared';
import PropTypes from 'prop-types';

const HeroContainer = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${props => props.img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }

  ${Button} {
    margin-top: 2rem;
    padding: 0.7rem 3rem;
  }
`;

HeroContainer.propTypes = {
  img: PropTypes.node.isRequired,
};

export default HeroContainer;
