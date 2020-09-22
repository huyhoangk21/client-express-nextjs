import styled from 'styled-components';
import { Container, SectionTitle } from '../shared';

const AboutContainer = styled(Container)`
  background-color: ${props => props.theme.backgroundColor};

  @media screen and (min-width: 992px) {
    align-items: start;
  }

  .about__content {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    ${SectionTitle} {
      margin-bottom: 2rem;
    }

    .about__text {
      text-align: justify;
      line-height: 1.5rem;
      margin-bottom: 2rem;

      @media screen and (min-width: 992px) {
        line-height: 2rem;
      }
    }
  }

  .about__img {
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: 350px;
    }
  }
`;

export default AboutContainer;