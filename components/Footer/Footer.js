import FooterContainer from './Footer.styled';
import Link from 'next/link';

const Footer = () => {
  return (
    <FooterContainer as='footer'>
      <FooterContainer.Col className='col-big'>
        <h3>Pham Chu Express</h3>
        <div className='content'>
          Pham Chu Express đã hỗ trợ nhiều khách hàng Việt Nam tại Mỹ vận chuyển
          hàng hoá và tiền về cho người thân, gia đình, và bạn bè tại Việt Nam
          mỗi ngày. Phương châm làm việc của Pham Chu Express là nhanh chóng, uy
          tín, và đảm bảo.
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
            <a
              href='http://maps.google.com/?q=611 N 27th St, Ste 1, Lincoln, NE, 68503'
              target='_blank'>
              611 N 27th St, Ste 1, Lincoln, NE, 68503
            </a>
          </div>
          <div className='content__item'>
            <h4>
              <i className='las la-envelope'></i> Email
            </h4>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=phamchu.importandexport@gmail.com'
              target='_blank'>
              phamchu.importandexport@gmail.com
            </a>
          </div>
          <div className='content__item'>
            <h4>
              <i className='las la-phone'></i> Điện thoại
            </h4>
            <a href='tel:2062014805' target='_blank'>
              (206) 201-4805 (Tiếng Anh)
            </a>
            <a href='tel:4023045519' target='_blank'>
              (402) 304-5519 (Tiếng Việt)
            </a>
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
