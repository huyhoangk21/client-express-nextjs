import Layout from '../components/Layout';
import { ServiceContent } from '../components/ServicePage';
import { SectionTitle } from '../components/shared';
export default function Service() {
  return (
    <Layout title='Các dịch vụ của Pham Chu Express' headerScrolled={true}>
      <div style={{ paddingTop: '60px' }}>
        <ServiceContent id='service1'>
          <ServiceContent.Col>
            <img
              src='/images/service-1.jpg'
              alt='Kho vận chuyển Pham Chu Express'
            />
          </ServiceContent.Col>
          <ServiceContent.Col>
            <SectionTitle>Chuyển hàng về Việt Nam</SectionTitle>
            <div className='content'>
              <ul>
                <li>Chi phí vận chuyển từ $5-6/lb</li>
                <li>Giao hàng khắp mọi tỉnh thành tại Việt Nam</li>
                <li>Hàng được giao tận nhà tại Việt Nam từ 2-3 tuần</li>
                <li>Dịch vụ bao trọn gói thủ tục và thuế nhập khẩu</li>
                <li>Đăng kí chuyển hàng nhanh chóng và dễ dàng</li>
                <li>Có dịch vụ nhân viên đến tận nhà và lấy hàng</li>
              </ul>
            </div>
          </ServiceContent.Col>
        </ServiceContent>
        <ServiceContent bg id='service2'>
          <ServiceContent.Col>
            <img
              src='/images/service-2.jpg'
              alt='Kho vận chuyển Pham Chu Express'
            />
          </ServiceContent.Col>
          <ServiceContent.Col>
            <SectionTitle>Chuyển tiền về Việt Nam</SectionTitle>
            <div className='content'></div>
          </ServiceContent.Col>
        </ServiceContent>
        <ServiceContent id='service3'>
          <ServiceContent.Col>
            <img
              src='/images/service-3.jpg'
              alt='Kho vận chuyển Pham Chu Express'
            />
          </ServiceContent.Col>
          <ServiceContent.Col>
            <SectionTitle>Mua hàng</SectionTitle>
            <div className='content'></div>
          </ServiceContent.Col>
        </ServiceContent>
        <ServiceContent bg id='service4'>
          <ServiceContent.Col>
            <img
              src='/images/service-4.jpg'
              alt='Kho vận chuyển Pham Chu Express'
            />
          </ServiceContent.Col>
          <ServiceContent.Col>
            <SectionTitle>In ấn</SectionTitle>
            <div className='content'></div>
          </ServiceContent.Col>
        </ServiceContent>
        <ServiceContent id='service5'>
          <ServiceContent.Col>
            <img
              src='/images/service-5.jpg'
              alt='Kho vận chuyển Pham Chu Express'
            />
          </ServiceContent.Col>
          <ServiceContent.Col>
            <SectionTitle>Chuyển hàng nội địa Mỹ</SectionTitle>
            <div className='content'></div>
          </ServiceContent.Col>
        </ServiceContent>
        <ServiceContent bg id='service6'>
          <ServiceContent.Col>
            <img
              src='/images/service-6.jpg'
              alt='Kho vận chuyển Pham Chu Express'
            />
          </ServiceContent.Col>
          <ServiceContent.Col>
            <SectionTitle>Sản phẩm</SectionTitle>
            <div className='content'></div>
          </ServiceContent.Col>
        </ServiceContent>
      </div>
    </Layout>
  );
}
