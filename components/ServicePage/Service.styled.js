import styled from 'styled-components';
import { Container, SectionTitle } from '../shared';

export const ServiceContent = styled(Container)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  background-color: ${props =>
    props.bg ? props.theme.backgroundColor : 'white'};

  @media screen and (min-width: 992px) {
    flex-direction: ${props => (props.bg ? 'row-reverse' : 'row')};
    justify-content: space-between;
  }

  .content {
  }
`;

const Col = styled.div`
  width: 100%;

  @media screen and (min-width: 992px) {
    width: 370px;
  }

  @media screen and (min-width: 1200px) {
    width: 430px;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  ${SectionTitle} {
    font-size: 1.5rem;
    margin-top: 2rem;

    @media screen and (min-width: 992px) {
      margin-top: 0;
    }
  }

  .content {
    margin-top: 2rem;
    line-height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      list-style-position: inside;
      list-style-type: square;
    }
  }

  .content.justify {
    text-align: justify;
    display: block;
    a {
      text-decoration: none;
      color: ${props => props.theme.main};
    }
  }
`;

ServiceContent.Col = Col;
