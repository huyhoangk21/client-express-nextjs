import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HeaderContainer, Nav, Dropdown } from './Header.styled';
import { Logo } from '../shared';

const Header = ({ scroll }) => {
  const [scrolled, setScrolled] = useState(scroll);
  const [sideNav, setSideNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navRef = useRef();
  const hamburgerRef = useRef();

  useEffect(() => {
    const openSideNav = e => {
      if (
        !navRef.current.contains(e.target) &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setSideNav(false);
      }
    };
    window.addEventListener('click', openSideNav);

    return () => {
      window.removeEventListener('click', openSideNav);
    };
  }, [sideNav]);

  useEffect(() => {
    if (scroll) {
      return;
    }
    const scrollWindow = () => {
      setScrolled(window.scrollY > 150);
    };

    document.addEventListener('scroll', scrollWindow);

    return () => {
      document.removeEventListener('scroll', scrollWindow);
    };
  }, [scrolled]);

  return (
    <HeaderContainer scrolled={scrolled} as='header'>
      <Logo>Express</Logo>
      <Nav sideNav={sideNav} ref={navRef} scrolled={scrolled}>
        <i className='las la-times close' onClick={() => setSideNav(false)} />
        <Link href='/'>
          <Nav.Item>Trang chủ</Nav.Item>
        </Link>
        <Dropdown onClick={() => setShowDropdown(!showDropdown)}>
          <Dropdown.Title>
            Dịch vụ <i className='fas fa-chevron-down' />
          </Dropdown.Title>
          <Dropdown.Content showDropdown={showDropdown}>
            <Link href='/service#service1'>
              <Dropdown.Item>Chuyển hàng từ Mỹ về Việt Nam</Dropdown.Item>
            </Link>
            <Link href='/service#service2'>
              <Dropdown.Item>Chuyển tiền từ Mỹ về Việt Nam</Dropdown.Item>
            </Link>
            <Link href='/service#service3'>
              <Dropdown.Item>Mua hàng</Dropdown.Item>
            </Link>
            <Link href='/service#service4'>
              <Dropdown.Item>In ấn</Dropdown.Item>
            </Link>
            <Link href='/service#service5'>
              <Dropdown.Item>Vận chuyển nội địa Mỹ</Dropdown.Item>
            </Link>
            <Link href='/service#service6'>
              <Dropdown.Item>Sản phẩm</Dropdown.Item>
            </Link>
          </Dropdown.Content>
        </Dropdown>
        <Link href='/news'>
          <Nav.Item>Thông tin</Nav.Item>
        </Link>
        <Link href='/products'>
          <Nav.Item>Sản phẩm</Nav.Item>
        </Link>
        <Link href='/contact'>
          <Nav.Item>Liên hệ</Nav.Item>
        </Link>
      </Nav>
      <i
        className='las la-bars open'
        onClick={() => setSideNav(true)}
        ref={hamburgerRef}
      />
    </HeaderContainer>
  );
};

export default Header;
