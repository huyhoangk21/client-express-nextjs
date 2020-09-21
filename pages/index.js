import Head from 'next/head';
import { Button } from '../components/shared';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <Hero img='images/hero-bg.jpg' title='Chúng tôi vận chuyển hàng'>
      <Button white>Đọc thêm</Button>;
    </Hero>
  );
}
