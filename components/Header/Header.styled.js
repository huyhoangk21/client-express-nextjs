import styled from 'styled-components';
import { Container } from '../shared';
import PropTypes from 'prop-types';

export const HeaderContainer = styled(Container)`
  z-index: 10;
  position: fixed;
  width: 100%;
  min-height: 60px;
  background-color: ${props => (props.scrolled ? 'white' : 'transparent')};
  box-shadow: ${props => (props.scrolled ? '0 0 0.5rem #999999' : '')};
  padding-top: 0;
  padding-bottom: 0;
  .open {
    font-size: 1.5rem;
    color: ${props => (props.scrolled ? 'black' : 'white')};
    cursor: pointer;

    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;

HeaderContainer.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  width: 15rem;
  padding: 2rem 1rem;
  background-color: white;
  transform: ${props => (props.sideNav ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.4s;

  .close {
    font-size: 1.5rem;
    margin-left: auto;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: ${props => props.theme.main};
    }

    @media screen and (min-width: 992px) {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {
    position: relative;
    width: 60%;
    color: ${props => (props.scrolled ? 'black' : 'white')};
    background-color: transparent;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    transform: translateX(0);
  }
`;

const NavItem = styled.a`
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s;
  padding: 1rem 0;
  &:hover {
    color: ${props => props.theme.main};
  }
`;

Nav.Item = NavItem;

Nav.propTypes = {
  sideNav: PropTypes.bool.isRequired,
};
