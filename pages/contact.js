import Layout from '../components/Layout';
import { ContactForm } from '../components/ContactForm';
export default function Contact() {
  return (
    <Layout title='Liên hệ Pham Chu Express' headerScrolled={true}>
      <ContactForm />
    </Layout>
  );
}
