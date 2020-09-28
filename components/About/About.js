import { SectionTitle } from '../shared';
import AboutContainer from './About.styled';

const About = () => {
  return (
    <AboutContainer as='section'>
      <div className='about__content'>
        <SectionTitle>Về chúng tôi</SectionTitle>
        <p className='about__text'>
          Pham Chu Express là một công ty vận chuyển hàng hoá được thành lập vào
          ngày 20/11/2018. Công ty chính thức đi vào hoạt động vào ngày 1/1/2019
          tại một căn hộ nhỏ tại trung tâm thành phố Lincoln thuộc tiểu bang
          Nebraska. Tới ngày 1/9/2019, Pham Chu Express dời văn phòng hoạt động
          về địa chỉ 611 N 27th Ste 1, Lincoln, NE 68503 (Địa chỉ văn phòng hiện
          tại)
        </p>
        <br />
        <p className='about__text'>
          Từ khi được thành lập, Pham Chu Express đã hỗ trợ nhiều khách hàng
          Việt Nam tại Mỹ vận chuyển hàng hoá và tiền về cho người thân, gia
          đình, và bạn bè tại Việt Nam mỗi ngày. Phương châm làm việc của Pham
          Chu Express là nhanh chóng, uy tín, và đảm bảo.
        </p>
      </div>
      <img
        className='about__img'
        src='/images/about.jpg'
        alt='Công ty vận chuyển Phạm Chu Express'
      />
    </AboutContainer>
  );
};

export default About;
