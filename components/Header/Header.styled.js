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

const DropdownContent = styled.div`
  display: ${props => (props.showDropdown ? 'block' : 'none')};
  background-color: white;
  color: black;
  @media screen and (min-width: 992px) {
    border-top: 3px solid ${props => props.theme.main};
    position: absolute;
    width: 14rem;
    box-shadow: 0 0 0.5rem #999999;
    display: none;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  @media screen and (min-width: 992px) {
    &:hover ${DropdownContent} {
      display: block;
    }
  }
`;

const DropdownTitle = styled(NavItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 992px) {
    i {
      margin-left: 0.4rem;
    }
  }
`;

const DropdownItem = styled(NavItem)`
  text-transform: none;
  display: block;
  font-size: 0.875rem;
  padding: 0.5rem;
  @media screen and (min-width: 992px) {
    &:hover {
      background-color: ${props => props.theme.backgroundColor};
    }
  }
`;

Dropdown.Content = DropdownContent;
Dropdown.Title = DropdownTitle;
Dropdown.Item = DropdownItem;
Nav.Item = NavItem;

Nav.propTypes = {
  sideNav: PropTypes.bool.isRequired,
};

DropdownContent.propTypes = {
  showDropdown: PropTypes.bool.isRequired,
};
