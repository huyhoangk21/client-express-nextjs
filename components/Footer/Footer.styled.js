import styled from 'styled-components';
import { Container } from '../shared';
const FooterContainer = styled(Container)`
  color: white;
  background-color: black;
  opacity: 0.75;
  width: 100%;
  align-items: start;

  hr {
    width: 100%;
  }

  .copyright {
    text-align: center;
    margin-top: 2rem;
    width: 100%;
  }

  .col-big {
    @media screen and (min-width: 1200px) {
      width: 30%;
    }
  }
`;

const Col = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    width: 45%;
  }

  @media screen and (min-width: 1200px) {
    width: 15%;
  }

  h3 {
    margin-bottom: 2rem;
    font-weight: normal;
  }

  .content {
    text-align: left;
    line-height: 2rem;
    color: ${props => props.theme.textGray};

    a {
      display: block;
      text-decoration: none;
      color: inherit;
      &:hover {
        color: white;
      }
    }

    i.social {
      font-size: 2rem;
    }

    h3 {
      font-size: 2rem;
    }

    .content__item {
      margin-bottom: 1rem;
    }
  }
`;

FooterContainer.Col = Col;

export default FooterContainer;
