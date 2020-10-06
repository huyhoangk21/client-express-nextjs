import styled from 'styled-components';
import { Container, SectionTitle } from '../shared';

export const ProductContent = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-color: ${props =>
    props.bg ? props.theme.backgroundColor : 'white'};

  @media screen and (min-width: 992px) {
    justify-content: space-between;
  }

  ${SectionTitle} {
    margin: 2rem auto;
  }

  .products {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
