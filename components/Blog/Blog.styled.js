import styled from 'styled-components';
import { Container, Info, Button } from '../shared';

const BlogContainer = styled(Container)`
  background-color: ${props => props.theme.backgroundColor};

  ${Button} {
    display: block;
    margin: 2rem auto 0;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${Info} {
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 300px;
      margin: 0;
    }
  }

  img {
    width: 100%;
    margin-top: 2rem;

    @media screen and (min-width: 768px) {
      margin-top: 3rem;
    }
  }

  h3 {
    color: ${props => props.theme.main};
  }
`;

BlogContainer.Content = Content;

export default BlogContainer;
