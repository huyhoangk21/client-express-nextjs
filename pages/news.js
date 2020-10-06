import Layout from '../components/Layout';
import MockedNews from '../components/MockedNews/MockedNews';
import { Hero } from '../components/Hero';
export default function News() {
  return (
    <Layout title='Pham Chu Express | Thông tin' headerScrolled={true}>
      <Hero img='images/news-bg.jpg' text='Thông tin' />
      <MockedNews />
    </Layout>
  );
}
