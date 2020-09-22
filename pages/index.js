import { Button } from '../components/shared';
import Hero from '../components/Hero';
import About from '../components/About';
import Layout from '../components/Layout';
import Service from '../components/Service';
import Process from '../components/Process';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <Layout title='Pham Chu Express | Công Ty Vận Chuyển'>
      <Hero img='images/hero-bg.jpg' text='Chúng tôi vận chuyển hàng'>
        <Button white>Đọc thêm</Button>
      </Hero>
      <About />
      <Service />
      <Process img='/images/process.jpg' />
      <Blog />
    </Layout>
  );
}
