import Layout from '../components/Layout';
import { ServiceContent } from '../components/ServicePage';
import { SectionTitle } from '../components/shared';
import Link from 'next/link';

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
            <div className='content'>
              <ul>
                <li>Cước phí cạnh tranh chỉ từ 1.5-2%</li>
                <li>Chuyển tiền khắp mọi nơi trong lãnh thổ Việt Nam</li>
                <li>
                  Tiền chuyển đến người thân ở Việt Nam nhanh chóng không quá 1
                  ngày
                </li>
                <li>Thủ tục chuyển tiền không quá 5 phút</li>
                <li>Chuyển tiền nhanh chóng, đảm bảo, và uy tín</li>
              </ul>
            </div>
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
            <div className='content'>
              Pham Chu Express có dịch vụ mua các sản phẩm và hàng hoá trên toàn
              nước Mỹ và giao tận nhà cho người thân, gia đình, bạn bè tại Việt
              Nam. Khách hàng có thể đăng kí mua và chuyển hàng thông qua điện
              thoại, email hoặc ngay tại văn phòng.
            </div>
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
            <div className='content justify'>
              Pham Chu Express có cung cấp dịch vụ in, photocopy, và scan số
              lượng lớn với giá cước thấp.
            </div>
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
            <div className='content'>
              <ul>
                <li>
                  Dịch vụ chuyển hàng nội địa trên toàn lãnh thổ Mỹ trong thời
                  gian từ 1 đến 4 ngày.
                </li>
                <li>
                  Hỗ trợ in label của các hãng vận chuyển lớn FedEx, USPS, hoặc
                  UPS.
                </li>
                <li>
                  Thủ tục đăng kí chuyển hàng đơn giản như đăng kí chuyển hàng
                  quốc tế.
                </li>
                <li>
                  Khách hàng sẽ được cung cấp mã tracking để có thể theo dõi
                  hàng hoá được vận chuyển online.
                </li>
              </ul>
            </div>
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
            <div className='content justify'>
              Ngoài các dịch vụ liên quan tới vận chuyển, Phạm Chu Express còn
              bán các sản phẩm, thực phẩm thiết yếu và một số mặt hàng điện tử
              như sữa, vitamin, laptop hay smartphone.
              <br /> Thời gian giao hàng tuỳ vào từng sản phẩm có thể từ 2-7
              ngày.
              <br />
              <br />
              <Link href='/'>
                <a>
                  Tìm hiểu thêm <i className='las la-arrow-right' />
                </a>
              </Link>
            </div>
          </ServiceContent.Col>
        </ServiceContent>
      </div>
    </Layout>
  );
}
