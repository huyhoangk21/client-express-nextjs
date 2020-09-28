import Link from 'next/link';
import { Info, SectionTitle } from '../shared';
import ServiceContainer from './Service.styled';

const services = [
  {
    icon: 'las la-plane',
    title: 'Chuyển hàng từ Mỹ về Việt Nam',
    text:
      'Vận chuyển hàng từ Mỹ và giao tận nhà cho người thân, gia đình, và bạn bè tại Việt Nam.',
    link: '/',
  },
  {
    icon: 'las la-money-bill-alt',
    title: 'Chuyển tiền từ Mỹ về Việt Nam',
    text:
      'Chuyển tiền về Việt Nam nhanh chóng cho người thân, gia đình, và bạn bè tại Việt Nam trong vòng 1 ngày.',
    link: '/',
  },
  {
    icon: 'las la-store-alt',
    title: 'Mua hàng',
    text:
      'Mua và vận chuyển các mặt hàng có tại khắp nước Mỹ và giao tận nhà tại Việt Nam',
    link: '/',
  },
  {
    icon: 'las la-print',
    title: 'In ấn',
    text: 'Dịch vụ in ấn và scan số lượng lớn nhanh chóng và uy tín.',
    link: '/',
  },
  {
    icon: 'las la-truck',
    title: 'Chuyển hàng nội địa Mỹ',
    text: 'Vận chuyển hàng hoá tới khắp nước Mỹ trong vòng không quá 4-5 ngày.',
    link: '/',
  },
  {
    icon: 'las la-shopping-cart',
    title: 'Sản phẩm',
    text:
      'Pham Chu Express có bán các sản phẩm, thực phẩm thiết yếu và dịch vụ giao hàng tận nơi.',
    link: '/',
  },
];

const renderedServices = services.map(service => {
  return (
    <Info key={service.title}>
      <i className={service.icon} />
      <Info.Content>
        <h4>{service.title}</h4>
        <p>{service.text}</p>
        <Link href={service.link}>
          <a>Tìm hiểu</a>
        </Link>
      </Info.Content>
    </Info>
  );
});

const Service = () => {
  return (
    <ServiceContainer as='section'>
      <SectionTitle>Các dịch vụ</SectionTitle>
      <ServiceContainer.Content>{renderedServices}</ServiceContainer.Content>
    </ServiceContainer>
  );
};

export default Service;
