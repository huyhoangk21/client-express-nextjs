import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.main};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease;
  outline: none;
  &:hover,
  &:focus {
    background-color: transparent;
  }

  ${props =>
    props.white &&
    css`
      &:hover,
      &:focus {
        border-color: white;
      }
    `}

  ${props =>
    !props.white &&
    css`
      &:hover,
      &:focus {
        border-color: black;
        color: black;
      }
    `}
`;

Button.propTypes = {
  white: PropTypes.bool,
};

export default Button;
