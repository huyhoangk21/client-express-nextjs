import styled from 'styled-components';

import { Container, SectionTitle } from '../shared';
const ServiceContainer = styled(Container)`
  padding-top: 4rem;
  padding-botton: 4rem;
  ${SectionTitle} {
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

ServiceContainer.Content = Content;

export default ServiceContainer;
