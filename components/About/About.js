import { SectionTitle } from '../shared';
import AboutContainer from './About.styled';

const About = () => {
  return (
    <AboutContainer>
      <div className='about__content'>
        <SectionTitle>Về chúng tôi</SectionTitle>
        <p className='about__text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam
          amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos
          ipsam voluptas.
        </p>
        <br />
        <p className='about__text'>
          Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum
          porro expedita labore esse velit veniam laborum quo obcaecati
          similique iusto delectus quasi!
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
