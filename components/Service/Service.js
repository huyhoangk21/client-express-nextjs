import Link from 'next/link';
import { Info, SectionTitle } from '../shared';
import ServiceContainer from './Service.styled';

const services = [
  {
    icon: 'las la-plane',
    title: 'Chuyển hàng từ Mỹ về Việt Nam',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-money-bill-alt',
    title: 'Chuyển tiền từ Mỹ về Việt Nam',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-store-alt',
    title: 'Mua hàng',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-print',
    title: 'In ấn',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-truck',
    title: 'Chuyển hàng nội địa Mỹ',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
    link: '/',
  },
  {
    icon: 'las la-shopping-cart',
    title: 'Sản phẩm',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
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
