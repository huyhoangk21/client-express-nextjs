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
          </ServiceContent.Col>
        </ServiceContent>
      </div>
    </Layout>
  );
}
