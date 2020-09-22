import { Button } from '../components/shared';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout title='Pham Chu Express | Công Ty Vận Chuyển'>
      <Hero img='images/hero-bg.jpg' text='Chúng tôi vận chuyển hàng'>
        <Button white>Đọc thêm</Button>;
      </Hero>
    </Layout>
  );
}
