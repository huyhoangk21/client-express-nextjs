import { Fragment } from 'react';
import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
const Layout = ({ title, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.14.0/css/all.css'
          integrity='sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc'
          crossorigin='anonymous'
        />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
