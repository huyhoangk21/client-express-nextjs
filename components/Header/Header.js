import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HeaderContainer, Nav } from './Header.styled';
import { Logo } from '../shared';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sideNav, setSideNav] = useState(false);
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
    const scrollWindow = () => {
      setScrolled(window.scrollY > 200);
    };

    document.addEventListener('scroll', scrollWindow);

    return () => {
      document.removeEventListener('scroll', scrollWindow);
    };
  }, [scrolled]);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo>Express</Logo>
      <Nav sideNav={sideNav} ref={navRef} scrolled={scrolled}>
        <i className='las la-times close' onClick={() => setSideNav(false)} />
        <Link href='/'>
          <Nav.Item>Trang chủ</Nav.Item>
        </Link>
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
