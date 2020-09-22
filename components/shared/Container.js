import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0.5rem;

  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: 0 8rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 10rem;
  }

  @media screen and (min-width: 1600px) {
    padding: 0 25rem;
  }
`;

export default Container;
