import styled from 'styled-components';
import { Container, SectionTitle } from '../shared';

export const ServiceContent = styled(Container)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  background-color: ${props =>
    props.bg ? props.theme.backgroundColor : 'white'};

  @media screen and (min-width: 992px) {
    flex-direction: ${props => (props.bg ? 'row-reverse' : 'row')};
  }
`;

const Col = styled.div`
  width: 100%;
  max-width: 450px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  ${SectionTitle} {
    font-size: 1.5rem;
  }
`;

ServiceContent.Col = Col;
