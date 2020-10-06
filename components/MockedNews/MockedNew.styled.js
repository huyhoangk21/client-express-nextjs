import styled from 'styled-components';
import { Container, SectionTitle } from '../shared';

export const MockedNewsContainer = styled(Container)`
  flex-direction: column;
  ${SectionTitle} {
    margin: 2rem auto;
  }

  .news-description {
    font-size: 1.5rem;
  }

  .news-image {
    margin: 2rem auto;
    display: flex;
    flex-direction: column;

    img {
      width: 500px;
      height: 400px;
      object-fit: cover;
      margin: 2rem;
    }
  }
`;
