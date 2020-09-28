import FooterContainer from './Footer.styled';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterContainer as='footer'>
      <FooterContainer.Col className='col-big'>
        <h3>Pham Chu Express</h3>
        <div className='content'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam
          amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos
          ipsam voluptas.
        </div>
      </FooterContainer.Col>
      <FooterContainer.Col>
        <h3>Đường dẫn</h3>
        <div className='content'>
          <Link href='/'>
            <a>Trang chủ</a>
          </Link>
          <Link href='/service'>
            <a>Dịch vụ</a>
          </Link>
          <Link href='/blog'>
            <a>Thông tin</a>
          </Link>
          <Link href='/products'>
            <a>Sản phẩm</a>
          </Link>
          <Link href='/contact'>
            <a>Liên hệ</a>
          </Link>
        </div>
      </FooterContainer.Col>
      <FooterContainer.Col>
        <h3>Mạng xã hội</h3>
        <div className='content'>
          <a
            href='https://www.facebook.com/Ph%E1%BA%A1m-Chu-Xu%E1%BA%A5t-Nh%E1%BA%ADp-Kh%E1%BA%A9u-109730794049899'
            target='_blank'>
            <i className='lab la-facebook-f social' />
          </a>
        </div>
      </FooterContainer.Col>
      <FooterContainer.Col className='col-big'>
        <h3>Liên hệ</h3>
        <div className='content'>
          <div className='content__item'>
            <h4>
              <i className='las la-map-marked'></i> Địa chỉ
            </h4>
            <p>611 N 27th St, Ste 1, Lincoln, NE, 68503</p>
          </div>
          <div className='content__item'>
            <h4>
              <i className='las la-envelope'></i> Email
            </h4>
            <p>phamchu.importandexport@gmail.com</p>
          </div>
          <div className='content__item'>
            <h4>
              <i className='las la-phone'></i> Điện thoại
            </h4>
            <p>(206) 201-4805 (Tiếng anh)</p>
            <p>(402) 304-5519 (Tiếng việt)</p>
          </div>
        </div>
      </FooterContainer.Col>
      <hr />
      <div className='copyright'>
        Copyright <i className='las la-copyright' /> 2020 Pham Chu Express. All
        rights reserved.
      </div>
    </FooterContainer>
  );
};

export default Footer;
