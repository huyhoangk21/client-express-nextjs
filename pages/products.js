import Layout from '../components/Layout';
import { ProductPage } from '../components/ProductPage';
export default function Product() {
  return (
    <Layout title='Pham Chu Express | Sản Phẩm' headerScrolled={true}>
      <ProductPage />
    </Layout>
  );
}
